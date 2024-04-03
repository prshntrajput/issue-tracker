import prisma from '@/prisma/client'
import React from 'react'
import IssueForm from '../../_components/IssueForm'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
    params:{
        id:string
    }
}

const EditIssuePage = async ({params}:Props) => {

   const issue= await prisma.issue.findUnique({where:{
        id:parseInt(params.id)
    }})

    if(!issue) return notFound();
  return (
    <div>
<IssueForm issue={issue}/>

    </div>
  )
}

export const metadata: Metadata = {
     
    title:"Issue Tracker - Edit",
    description:"Edit views"
};

export default EditIssuePage