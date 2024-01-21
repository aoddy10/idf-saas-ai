import Stripe from 'stripe';
import {AppConfig} from './config';


export const stripe = new Stripe(AppConfig.stripe.STRIPE_API_KEY as string, {
    apiVersion: "2023-10-16",
    typescript: true
})
