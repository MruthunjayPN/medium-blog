import { z } from "zod"

//zod validation for signup inputs
export const signupInputs = z.object ({
    email : z.string().email(),
    firstname : z.string().optional(),
    password : z.string().min(6) 
})


//zod validation for signin inputs
export const signinInputs = z.object ({
    email : z.string().email(),
    password : z.string().min(6) 
})

//blog creation 
export const createBlogInputs = z.object ({
    title : z.string(), 
    content : z.string(), 

})

//blog id for updation
export const updateBlogInputs = z.object ({
    title : z.string(),
    content : z.string(), 
    blogid : z.number()
})

//zod inference which will be used by frontend
export type SignupParams = z.infer<typeof signupInputs>
export type SigninParams = z.infer<typeof signinInputs>
export type CreateBlogParams = z.infer<typeof createBlogInputs>
export type UpdateBlogParams = z.infer<typeof updateBlogInputs>





