import { string, z } from 'zod';

export const issueSchema = z.object({
    title: z.string().min(2, "Title is required"),
    description: z.string().min(1, "Please enter a description")
});

export const patchIssueSchema = z.object({
    title: z.string().min(2, "Title is required").optional(),
    description: z.string().min(1, "Please enter a description").optional(),
    assignedToUserId: z.string().min(1,"AssignedToUserId is required.").max(255).optional().nullable(),
});
