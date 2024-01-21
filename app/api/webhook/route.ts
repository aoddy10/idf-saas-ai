import {AppConfig} from '@/lib/config';
import Stripe from 'stripe'
import { headers } from "next/headers";
import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { stripe } from '@/lib/stripe';


export const POST = async(req: Request) => {

    const body = await req.text();
    const signature = headers().get("Stripe-Signature") as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            AppConfig.stripe.STRIPE_WEBHOOK_SECRET!
        )
    
    } catch (error: any) {
        console.log(error.message)
        return new NextResponse(`Webhook Error: ${error.message}`, {status: 400});
    }


    const session = event.data.object as Stripe.Checkout.Session;


    // if event is checkout, retrieved subscription from stripe
    if (event.type === 'checkout.session.completed') {
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
        )

        //   check if doesn't have userId in metadata
        if (!session?.metadata?.userId) {
            return new NextResponse("User id is required", {status: 400})
        }

        // create new subscription
        await prismadb.userSubscription.create({
            data: {
                userId: session?.metadata?.userId,
                stripeSubscriptionId: subscription.id,
                stripeCustomerId: subscription.customer as string,
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
            }
        })
    }


    // check if payment successfully, create subscription
    if (event.type === "invoice.payment_succeeded") {
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
        )

        console.log(`[subscription]: `,subscription)

        await prismadb.userSubscription.update({
            where: {
                stripeSubscriptionId: subscription.id
            },
            data: {
                stripePriceId: subscription.items.data[0].price.id,
                stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
            }
        })
    };

    return new NextResponse(null, {status: 200})
    
}
