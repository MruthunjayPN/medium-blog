import { z } from "zod";
export declare const signupInputs: z.ZodObject<{
    email: z.ZodString;
    firstname: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    firstname?: string | undefined;
}, {
    email: string;
    password: string;
    firstname?: string | undefined;
}>;
export declare const signinInputs: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const createBlogInputs: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const updateBlogInputs: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    blogid: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    blogid: number;
}, {
    title: string;
    content: string;
    blogid: number;
}>;
export type SignupParams = z.infer<typeof signupInputs>;
export type SigninParams = z.infer<typeof signinInputs>;
export type CreateBlogParams = z.infer<typeof createBlogInputs>;
export type UpdateBlogParams = z.infer<typeof updateBlogInputs>;
