import { checkApiLimit, increaseApiLimit } from '@/lib/api-limit';
import { AppConfig } from '@/lib/config';
import { checkSubscription } from '@/lib/subscription';
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from 'replicate'

const replicate = new Replicate({
    auth: AppConfig.REPLICATE_API_TOKEN || ''
})

export const POST = async (req: Request) => {
    try {
        const {userId} = auth();
        const body = await req.json();
        const {prompt} = body;

        if (!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }

        if (!prompt) {
            return new NextResponse("Prompt are required", {status: 400})
        }

        // check api limit
        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro) {
            return new NextResponse("Free trial has expired.", {status: 403});
        }

        // get result from api
        const response = await replicate.run(
            "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
            {
                input: {
                prompt_a: prompt
                }
            }
            );

        // increase usage count
        if (!isPro) {
            await increaseApiLimit();
        }

        return NextResponse.json(response)

    } catch (error) {
        console.log(("[MUSIC_ERROR] " + error))
        return new NextResponse("Internal error", {status: 500});
    }
  
}
