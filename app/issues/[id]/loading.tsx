import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { Card, Flex, Heading } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import ReactMarkdown from 'react-markdown'

const loading = () => {
  return (
    <div>
    <Heading><Skeleton/></Heading>
    <Flex className='space-x-4' my="2">
    <p><Skeleton/></p>
    </Flex>
    <Card className='prose' mt="4"><Skeleton/>
    </Card></div>
    
  )
}

export default loading