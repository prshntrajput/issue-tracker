import React from 'react'
import { Button, Table } from '@radix-ui/themes'
import Link from '../components/Link'
import prisma from '@/prisma/client'
import IssueStatusBadge from '../components/IssueStatusBadge'
import delay from 'delay';
import IssueActions from './IssueActions'
import { Status } from '@prisma/client'
import { Metadata } from 'next'



const IssuesPage = async ({searchParams}: {searchParams:{status: Status}}) => {
     
    const statuses = Object.values(Status);
    const status = statuses.includes(searchParams.status)? searchParams.status: "undefined";
    const issues = await prisma.issue.findMany();
   


  return (
    <div>
        <IssueActions/>

    <Table.Root variant='surface' className='space-y-2'>
        <Table.Header>
            <Table.Row>
                <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className=' md:table-cell'>CreatedAt</Table.ColumnHeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {issues.map(issue =>(<Table.Row key={issue.id}>
                <Table.Cell><Link href={`/issues/${issue.id}` }>{issue.title}</Link>
                <div className='block md:hidden'><IssueStatusBadge status={issue.status}/></div>
                </Table.Cell>
                <Table.Cell className='hidden md:table-cell'><IssueStatusBadge status={issue.status}/></Table.Cell>
                <Table.Cell className=' md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>))}
        </Table.Body>
    </Table.Root>
    </div>
  )
}

export const metadata: Metadata = {
     
    title:"Issue Tracker - Issues",
    description:"Displaying views"
};
export default IssuesPage