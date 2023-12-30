import Stripe from 'stripe';
import { APP_CONFIG } from '@/lib/config';


export const stripe = new Stripe(APP_CONFIG.stripe.apiKey, {
    apiVersion: "2023-10-16",
    typescript: true
})
