"use client";
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import dynamic from 'next/dynamic';
import "easymde/dist/easymde.min.css"
import { Controller, useForm } from 'react-hook-form';
import { title } from 'process';
import  axios  from 'axios'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { issueSchema } from '@/app/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';
import { Issue } from '@prisma/client';

const SimpleMde= dynamic(()=> import ('react-simplemde-editor'), { ssr :false})

type NewIssueForm = z.infer<typeof issueSchema>

const IssueForm = ({issue}:{issue?:Issue}) => {

    const [error, setError]=useState("");
    const [isSubmitting, setSubmitting]= useState(false);

   const router = useRouter();

   const{register, handleSubmit, control,formState : {errors}}= useForm<NewIssueForm>({
    resolver: zodResolver(issueSchema)
   });
  return (

    <div className='max-w-xl'>
        {error && <Callout.Root className='mb-5' color='red'><Callout.Text>{error}</Callout.Text></Callout.Root>}
    <form className='space-y-3' onSubmit={handleSubmit(async (data)=>
         {
            try {
                setSubmitting(true);
                if(issue)
                await axios.patch('/api/issues/' + issue.id, data)
            else
                 await axios.post('/api/issues', data);  router.push('/issues')
                
            } catch (error) {
                setSubmitting(false);
                setError("An unexpected error occured");
            }
           
        })}>
        <TextField.Root defaultValue={issue?.title} placeholder='Title' {...register("title")}>            
        </TextField.Root>
        { <ErrorMessage>{errors.title?.message}</ErrorMessage>}
        <Controller
        name="description"
        control={control} defaultValue={issue?.description}
        render={({field})=><SimpleMde placeholder="Description" {...field} />}
        />
        {<ErrorMessage>{errors.description?.message}</ErrorMessage>}
        
        <Button>Submit New Issue {isSubmitting && <Spinner/>}</Button>
    </form>
    </div>
  )
}

export default IssueForm