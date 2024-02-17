import { z } from "zod";


const CreateUserValidation = z.object({
    body : z.object({
        userName: z.string({required_error : 'Username is required'}),
       
        email : z.string({required_error : 'Email not provided'}).email(),
        password : z.string().min(8, {message : 'Password should be at least 8 characters'}).max(14,{message : 'Password can not be more than 14 characters'}),
        role : z.enum(["user","admin","superAdmin"])
    })
})

  export const UserValidation = {CreateUserValidation}