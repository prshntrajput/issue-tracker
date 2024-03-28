"use client";
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssue = () => {
  return (
    <div className='space-y-3 max-w-xl'>
        <TextField.Root placeholder='TITLE'>            
        </TextField.Root>
        <TextArea placeholder="Description" />
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssue