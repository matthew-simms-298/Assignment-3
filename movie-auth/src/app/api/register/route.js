import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import bcrypr from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request) {
    try{
        const { email, password } = await request.body;

        const existingUser = await prisma.user.findUnique(
            {where: {email}}
        );

        if (existingUser) {
            return NextResponse.json({message: 'User Already Exists'}, {status: 400});
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypr.hash(password, saltRounds);

        const newUser = await prisma.user.create({
            data: {email, password: hashedPassword}
        });
        return NextResponse.json({message: 'User Created Successfully'}, {status: 200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Error Creating User'}, {status: 500});
    }
    
}