import Stripe from 'stripe';
import Config from '@/lib/config';

export const stripe = new Stripe(Config.stripeApiKey!, {
    apiVersion: "2023-10-16",
    typescript: true
})
