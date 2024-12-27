import { Hono } from "hono"
import { PrismaClient, User } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { createBlogInputs, updateBlogInputs } from "@muttu11/medium-common"

export const  blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET   : string
    }
    Variables : {
        userId : number
    }
}>()

//middleware
blogRouter.use('/*', async(c , next)=> {
    const authHeader = c.req.header("Authorization") || ""
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET) as User;
    
        if(user){
            c.set("userId", user.id);
            await next();
        }
    }
    catch {
        c.status(403);
        return c.json({
            message : "you are not logged in"
        })
    }
});


//create a blog
blogRouter.post('/new', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json()
    const {success} = createBlogInputs.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({message : 'input validation failed for blog inputs'})
    }
    const userId = c.get("userId")
   try {
        const blog =  await prisma.blog.create({
            data :{
                title : body.title ,
                content : body.content,
                authorId : userId
            }
        });
        return c.json({id : blog.blogid})
   }
   catch(e){
        c.status(403);
        return c.json({message : "error while creating blog for create blog"})
   }
})

//update a blog
blogRouter.put('/update', async (c) => {
    const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
    const body = await c.req.json();
    const {success} = updateBlogInputs.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({message : 'input validation failed for update blog '})
    }
    try{
        const blog = await prisma.blog.update({
            where :{
                blogid : body.id 
            },
            data : {
                title : body.title,
                content : body.content
            }
        })
        return c.json({id : blog.blogid})
    }
    catch(e){
        c.status(403);
        return c.json({message : "error while updating blog"})
    } 
})

//showing all blogs at landing page 
//Todo : add pagination.
blogRouter.get('/bulk',async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
   try{
        const blogs = await prisma.blog.findMany({
            select : {
                content : true ,
                title : true ,
                blogid : true ,
                author : {
                    select : {
                        firstname : true
                    }
                }
            }
        });
        return c.json({blogs})
   }
   catch(e){
        c.status(411)
        return c.json({message : "error while fetching blog"})
   }
})

//feteching a particular blog
blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const id = c.req.param("id");
    try {
        const blog = await prisma.blog.findFirst({
            where : {
                blogid : Number(id)
            },
            select : {
                content : true ,
                title : true ,
                blogid : true ,
                author : {
                    select : {
                        firstname : true
                    }
                }
            }
        })
        return c.json({blog})
    }
    catch(e){
        c.status(411)
        return c.json({message : "error while fetching blog"})
    }
})

