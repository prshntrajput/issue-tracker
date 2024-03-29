import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import prisma from '@/prisma/client'
import { Box, Button, Card, Flex, Grid, Heading } from '@radix-ui/themes'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import EditButtonDetail from './EditButtonDetail'
import IssueDetail from './IssueDetail'

interface Props{
    params:{
        id:string
    }
}

const IssueDetailPage = async ({params:{id}}:Props) => {
   
   const issue = await prisma.issue.findUnique({ where :{id:parseInt(id)}});
   if(typeof id ==="number") return notFound();

   if(!issue)
    notFound();
     
  return (
    <Grid columns={{initial: "1" , md:"2"}} gap="4">
        <Box>
            <IssueDetail issue={issue}/>
        </Box>
    <Box>
        <EditButtonDetail issueId={issue.id}/>
    </Box>
    </Grid>
  )
}

export default IssueDetailPage