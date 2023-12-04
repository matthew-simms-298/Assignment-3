import prisma from "@src/app/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {email, password} = body;
        const newPost = await prisma.post.create({
            data: {
                email,
                password
            }
        })
        return NextResponse.json(newPost)
    }
    catch (error) {
        return NextResponse.json({message: "Post ERROR", error}, {status: 500})
    }
}