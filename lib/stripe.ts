import Stripe from 'stripe';
import CONFIG from './config';


export const stripe = new Stripe(CONFIG.stripe.apiKey, {
    apiVersion: "2023-10-16",
    typescript: true
})
