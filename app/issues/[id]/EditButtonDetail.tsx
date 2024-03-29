import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

interface Props{

    issueId:number
}

const EditButtonDetail = ({issueId}:Props) => {
  return (
    <div>
     
      <Button><Link href={`/issues/${issueId}/edit`}>Edit Issue</Link></Button>

    </div>
  )
}

export default EditButtonDetail