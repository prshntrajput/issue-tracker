import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { Issue } from '@prisma/client'
import { Card, Heading,Flex } from '@radix-ui/themes'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetail = ({issue}:{issue:Issue}) => {
  return (
    <>
        <Heading>{issue.title}</Heading>
    <Flex className='space-x-4' my="2">
    <IssueStatusBadge status={issue.status}/>
    <p>{issue.createdAt.toDateString()}</p>
    </Flex>
    <Card className='prose' mt="4"><ReactMarkdown>{issue.description}</ReactMarkdown>
    </Card>
    </>
  )
}

export default IssueDetail