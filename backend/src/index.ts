import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './Routes/userRouter'
import { blogRouter } from './Routes/blogRouter'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET   : string
  }
}>()


app.use('/*', cors());
app.route("/api/v1/user", userRouter)
app.route("/api/v1/blog", blogRouter)


export default app

//while commiting to git make sure that you remove database url and jwt secret from the toml file.
//you should not commit those