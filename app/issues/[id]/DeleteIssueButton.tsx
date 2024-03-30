
"use client"
import { Button } from '@radix-ui/themes'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface Props{

    issueId:number
}
const DeleteIssueButton =  ({issueId}:Props) => {
const [error, setError]= useState(false);
 const router = useRouter();
  return (
    
    <Button onClick={ async ()=> {
        try {
            await axios.delete('/api/issues/' + issueId);router.push("/issues") , router.refresh();
        } catch (error) {
            setError(true)
        }
        }}>Delete Issue</Button>
  )
}

export default DeleteIssueButton