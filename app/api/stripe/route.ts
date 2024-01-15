import {auth, currentUser} from '@clerk/nextjs'
import { NextResponse } from 'next/server'

import prismadb from '@/lib/prismadb'
import {stripe} from "@/lib/stripe"
import { absoluteUrl } from '@/lib/utils'

const settingUrl = absoluteUrl("/settings")

export const GET = async() => {
  try {
    const {userId} = auth();
    const user = await currentUser();

    // check if user already login
    if (!userId || !user) {
        return new NextResponse("Unauthorized", {status: 401})
    }

    // check if have user subscription
    const userSubscription = await prismadb.userSubscription.findUnique({
        where: {
            userId
        }
    });

    // check if user already have subscription, go to billing portal to upgrade/unsubscribe if it needs
    if (userSubscription && userSubscription.stripeCustomerId) {
        const stripeSession = await stripe.billingPortal.sessions.create({
            customer: userSubscription.stripeCustomerId,
            return_url: settingUrl
        })

        return new NextResponse(JSON.stringify({url: stripeSession.url}))
    }


    // if don't have stripe subscription
    const stripeSession = await stripe.checkout.sessions.create({
        success_url: settingUrl,
        cancel_url: settingUrl,
        payment_method_types: ["card"],
        mode: "subscription",
        billing_address_collection: "auto",
        customer_email: user.emailAddresses[0].emailAddress,
        line_items: [
            {
                price_data: {
                    currency: "USD",
                    product_data: {
                        name: "Genius Pro",
                        description: "Unlimited AI Generations"
                    },
                    unit_amount: 2000,
                    recurring: {
                        interval: "month"
                    }
                },
                quantity: 1
            }
        ],
        metadata: {
            userId
        }
    })

    return new NextResponse(JSON.stringify({url: stripeSession.url}))

  } catch (error) {
    console.log("[STRIPE_ERROR]", error)
    return new NextResponse("Internal error", {status: 500})
  }
}
