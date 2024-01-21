
import assert from 'assert';

// capture the environment variables the application needs
const {
NEXT_PUBLIC_APP_URL,
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
NEXT_PUBLIC_CLERK_SIGN_IN_URL,
NEXT_PUBLIC_CLERK_SIGN_UP_URL,
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
OPENAI_API_KEY,
REPLICATE_API_TOKEN,
DATABASE_URL,
CLERK_SECRET_KEY,
STRIPE_API_KEY,
STRIPE_WEBHOOK_SECRET,
CRISP_WEBSITE_ID
} = process.env;


// validate the required configuration information
    assert(`${NEXT_PUBLIC_APP_URL}`, "NEXT_PUBLIC_APP_URL configuration is required.");
    assert(`${NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}`, "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY configuration is required.");
    assert(`${CLERK_SECRET_KEY}`, "CLERK_SECRET_KEY configuration is required.");
    assert(`${NEXT_PUBLIC_CLERK_SIGN_IN_URL}`, "NEXT_PUBLIC_CLERK_SIGN_IN_URL configuration is required.");
    assert(`${NEXT_PUBLIC_CLERK_SIGN_UP_URL}`, "NEXT_PUBLIC_CLERK_SIGN_UP_URL configuration is required.");
    assert(`${NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL}`, "NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL configuration is required.");
    assert(`${NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}`, "NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL configuration is required.");
    assert(`${OPENAI_API_KEY}`, "OPENAI_API_KEY configuration is required.");
    assert(`${REPLICATE_API_TOKEN}`, "REPLICATE_API_TOKEN configuration is required.");
    assert(`${DATABASE_URL}`, "DATABASE_URL configuration is required.");
    assert(`${STRIPE_API_KEY}`, "STRIPE_API_KEY configuration is required.");
    assert(`${STRIPE_WEBHOOK_SECRET}`, "STRIPE_WEBHOOK_SECRET configuration is required.");
    assert(`${CRISP_WEBSITE_ID}`, "CRISP_WEBSITE_ID configuration is required.");

// export the configuration information
export const AppConfig =  {
    NEXT_PUBLIC_APP_URL,
    clerk: {
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
        CLERK_SECRET_KEY,
        NEXT_PUBLIC_CLERK_SIGN_IN_URL,
        NEXT_PUBLIC_CLERK_SIGN_UP_URL,
        NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
        NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
    },
    OPENAI_API_KEY,
    REPLICATE_API_TOKEN,
    DATABASE_URL,
    stripe: {
        STRIPE_API_KEY,
        STRIPE_WEBHOOK_SECRET

    },
     CRISP_WEBSITE_ID
    
}
