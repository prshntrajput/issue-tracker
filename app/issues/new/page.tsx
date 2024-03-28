"use client";
import { Button, TextField } from '@radix-ui/themes'
import SimpleMde from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css"

const NewIssue = () => {
  return (
    <div className='space-y-3 max-w-xl'>
        <TextField.Root placeholder='TITLE'>            
        </TextField.Root>
        <SimpleMde placeholder="Description" />
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssue