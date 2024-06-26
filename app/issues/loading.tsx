import { Table } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import IssueActions from './IssueActions'

const loading = () => {
    const issues= [1,2,3,4]
  return (
<div>
    <IssueActions/>
     <Table.Root variant='surface' className='space-y-2'>
        <Table.Header>
            <Table.Row>
                <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='hidden md:table-cell'>CreatedAt</Table.ColumnHeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {issues.map(issue =>(<Table.Row key={issue}>
                <Table.Cell><Skeleton/>
                <div className='block md:hidden'><Skeleton/></div>
                </Table.Cell>
                <Table.Cell className='hidden md:table-cell'><Skeleton/></Table.Cell>
                <Table.Cell className='hidden md:table-cell'><Skeleton/></Table.Cell>
            </Table.Row>))}
        </Table.Body>
    </Table.Root>
    </div>
  )
}

export default loading