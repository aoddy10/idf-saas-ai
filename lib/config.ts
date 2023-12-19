
import assert from 'assert';

// capture the environment variables the application needs
const {
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
CLERK_SECRET_KEY,
NEXT_PUBLIC_CLERK_SIGN_IN_URL,
NEXT_PUBLIC_CLERK_SIGN_UP_URL,
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
OPENAI_API_KEY,
REPLICATE_API_TOKEN
} = process.env;

// validate the required configuration information
assert(NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY configuration is required.");
assert(CLERK_SECRET_KEY, "CLERK_SECRET_KEY configuration is required.");
assert(NEXT_PUBLIC_CLERK_SIGN_IN_URL, "NEXT_PUBLIC_CLERK_SIGN_IN_URL configuration is required.");
assert(NEXT_PUBLIC_CLERK_SIGN_UP_URL, "NEXT_PUBLIC_CLERK_SIGN_UP_URL configuration is required.");
assert(NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL, "NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL configuration is required.");
assert(NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL, "NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL configuration is required.");
assert(OPENAI_API_KEY, "OPENAI_API_KEY configuration is required.");
assert(REPLICATE_API_TOKEN, "REPLICATE_API_TOKEN configuration is required.");

// export the configuration information
export default {
    clerk: {
        publishKey:NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
        secretKey:CLERK_SECRET_KEY,
        signInUrl:NEXT_PUBLIC_CLERK_SIGN_IN_URL,
        signUpUrl:NEXT_PUBLIC_CLERK_SIGN_UP_URL,
        afterSignInUrl:NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
        afterSignOutUrl:NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
    },
    openaiApiKey: OPENAI_API_KEY,
    replicateApiToken: REPLICATE_API_TOKEN
}
