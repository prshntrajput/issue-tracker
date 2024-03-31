import authOptions from "@/app/auth/authOptions";
import { issueSchema, patchIssueSchema } from "@/app/validationSchema"
import prisma from "@/prisma/client"
import { error } from "console";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"
 


export async function PATCH(request:NextRequest,{params}:{params: {id:string}},){

 const session  =  await getServerSession(authOptions);

  if(!session) return NextResponse.json({}, {status:401});
    const body =  await request.json();
    

    const validation = patchIssueSchema.safeParse(body);
    if(!validation.success)
      return NextResponse.json(validation.error.format(),{ status:400})
 
      const {assignedToUserId} = body;

      if(assignedToUserId){
        const user = await prisma.user.findUnique({where:{id: assignedToUserId}})

        if(!user) 
        return NextResponse.json({error:"Invalid eror"},{status:400})
      }

    const issue = await prisma.issue.findUnique({where:{
        id:parseInt(params.id)
    }})


    if(!issue) return notFound();

    const updatedIssue = await prisma.issue.update({where:{id:issue.id},data:{title:body.title,description:body.description,assignedToUserId:assignedToUserId}})

    return NextResponse.json(updatedIssue);

    
}

export async function DELETE(request:NextRequest,{params}:{params: {id:string}},){
       const session  =  await getServerSession(authOptions);

   if(!session) return NextResponse.json({}, {status:401});
  
    const issue = await prisma.issue.findUnique({where:{
        id:parseInt(params.id)
    }})


    if(!issue) return NextResponse.json({error:"invalid issue"} , {status:404})

    await prisma.issue.delete({where:{id:issue.id}})

    return NextResponse.json({});

    
}