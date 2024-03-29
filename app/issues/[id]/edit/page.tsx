import prisma from '@/prisma/client'
import React from 'react'
import IssueForm from '../../_components/IssueForm'
import { notFound } from 'next/navigation'

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

export default EditIssuePage