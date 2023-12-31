import { checkApiLimit, increaseApiLimit } from '@/lib/api-limit';
import config from '@/lib/config'
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai"


const openai = new OpenAI();

export const POST = async (req: Request) => {
    try {
        const {userId} = auth();
        const body = await req.json();
        const {prompt, amount=1, resolution = "512x512"} = body;

        if (!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }

        if (!config.openaiApiKey) {
            return new NextResponse("OpenAI API Key not configured", {status: 500})
        }

        if (!prompt) {
            return new NextResponse("Prompt are required", {status: 400})
        }
        if (!amount) {
            return new NextResponse("Amount are required", {status: 400})
        }
        if (!resolution) {
            return new NextResponse("Resolution are required", {status: 400})
        }

        // check api limit
        const freeTrial = await checkApiLimit();

        if (!freeTrial) {
            return new NextResponse("Free trial has expired.", {status: 403});
        }

        // get result from api
        const response = await openai.images.generate({
            prompt,
            size:resolution,
            quality:"standard",
            n:parseInt(amount,10),
        });

        // increase usage count
        await increaseApiLimit();

        return NextResponse.json(response.data)

    } catch (error) {
        console.log(("[IMAGE_ERROR] " + error))
        return new NextResponse("Internal error", {status: 500});
    }
  
}
