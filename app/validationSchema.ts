import { z } from 'zod';

export const createIssueSchema = z.object({
    title: z.string().min(2, "Title is required"),
    description: z.string().min(1, "Please enter a description")
});
