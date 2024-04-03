import React from 'react'
import IssueForm from '../_components/IssueForm'
import { Metadata } from 'next';

const NewIssueForm = () => {
  return (
    <div>
        <IssueForm/>

    </div>
  )
}

export const metadata: Metadata = {
     
    title:"Issue Tracker - New Issue",
    description:"Creating new issues"
};

export default NewIssueForm