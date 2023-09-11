import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/libs/prismadb';

export async function POST(
    request: Request
){
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const {
            userId,
            isGroup,
            members,
            name
        } = body;
    } catch (error: any) {
        return new NextResponse('Internal Error', {status: 500});
    }
}