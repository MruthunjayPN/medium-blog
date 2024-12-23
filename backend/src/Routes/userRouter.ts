import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signupInputs , signinInputs } from "@muttu11/medium-common"

export const  userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET   : string
      }
}>()

//signup
userRouter.post('/signup', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  
    const body = await c.req.json()
    const {success} = signupInputs.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({message : 'input validation failed for signup credentials'})
    }
    try {
      const user = await prisma.user.create({
        data : {
          email : body.email,
          firstname : body.firstname,
          password : body.password
        }
      })
      const token = await sign({id : user.id} , c.env.JWT_SECRET)
      return c.json({token})
    }
    catch(e){
      c.status(403);
      console.log(e)  //not necessary; but i have added just to check error
      return c.json({error :`error while signing up` })
    }
  })
  
  
  //signin
  userRouter.post('/signin',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  
    const body = await c.req.json()
    const {success} = signinInputs.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({message : 'input validation failed for signin credentials'})
    }
    const user = await prisma.user.findUnique({
      where : {
        email : body.email,
        password : body.password
      }
    })
  
    if(!user){
      c.status(403)
      return c.json({error :`Invalid credentials` })
    }
    const token = await sign({id : user.id} , c.env.JWT_SECRET)
    return c.json({token})
  })