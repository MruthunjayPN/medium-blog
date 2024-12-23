"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInputs = exports.createBlogInputs = exports.signinInputs = exports.signupInputs = void 0;
const zod_1 = require("zod");
//zod validation for signup inputs
exports.signupInputs = zod_1.z.object({
    email: zod_1.z.string().email(),
    firstname: zod_1.z.string().optional(),
    password: zod_1.z.string().min(6)
});
//zod validation for signin inputs
exports.signinInputs = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6)
});
//blog creation 
exports.createBlogInputs = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
//blog id for updation
exports.updateBlogInputs = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    blogid: zod_1.z.number()
});
