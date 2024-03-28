"use client";
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import SimpleMde from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css"
import { Controller, useForm } from 'react-hook-form';
import { title } from 'process';
import  axios  from 'axios'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createIssueSchema } from '@/app/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';

type IssueForm = z.infer<typeof createIssueSchema>

const NewIssue = () => {
    const [error, setError]=useState("");

   const router = useRouter();

   const{register, handleSubmit, control,formState : {errors}}= useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
   });
  return (

    <div className='max-w-xl'>
        {error && <Callout.Root className='mb-5' color='red'><Callout.Text>{error}</Callout.Text></Callout.Root>}
    <form className='space-y-3' onSubmit={handleSubmit(async (data)=>
         {
            try {
                 await axios.post('/api/issues', data);  router.push('/issues')
            } catch (error) {
                setError("An unexpected error occured");
            }
           
        })}>
        <TextField.Root placeholder='Title' {...register("title")}>            
        </TextField.Root>
        { <ErrorMessage>{errors.title?.message}</ErrorMessage>}
        <Controller
        name="description"
        control={control}
        render={({field})=><SimpleMde placeholder="Description" {...field} />}
        />
        {<ErrorMessage>{errors.description?.message}</ErrorMessage>}
        
        <Button>Submit New Issue</Button>
    </form>
    </div>
  )
}

export default NewIssue