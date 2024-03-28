import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';

const createIssueSchema = z.object({
    title: z.string().min(2,"Title is required"),
    description: z.string().min(1,"Please enter a description")
})

export async function POST(request:NextRequest){
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if(!validation.success)
      return NextResponse.json(validation.error.format(),{ status:400})
      
    const newIssue = await  prisma.issue.create({
        data:{title:body.title, description:body.description}
      });
      
    return NextResponse.json(newIssue,{status:201});
}