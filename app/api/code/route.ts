import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai"
import type { ChatMessageProps } from "@/lib/types";

const openai = new OpenAI();



const instructionMessage: ChatMessageProps  = {
    role: "system",
    content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
}

export const POST = async (req: Request) => {
    try {
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;

        if (!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }

        if (!process.env.OPENAI_API_KEY) {
            return new NextResponse("OpenAI API Key not configured", {status: 500})
        }

        if (!userId) {
            return new NextResponse("Messages are required", {status: 400})
        }

        // get result from api
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [instructionMessage, ...messages],
        })

        return NextResponse.json(response.choices[0].message)

    } catch (error) {
        console.log(("[CODE_ERROR] " + error))
        return new NextResponse("Internal error", {status: 500});
    }
  
}
