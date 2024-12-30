const { z } = require('zod')


const loginSchema = z.object({

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 chars" })
        .max(255, { message: "Email must not be more than 255 characters" }),

    password: z
        .string({ required_error: "password is required" })
        .min(7, { message: "passsword must be at least of 7 char" })
        .max(50, { message: "passsword must not be more than 50 char." })


})

const signupSchema = loginSchema.extend({
    username: z.string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 chars" })
        .max(255, { message: "Name must not be more than 255 characters" }),

    

    phone: z
        .string({ required_error: "phone is required" })
        .min(10, { message: "phone must be at least of 10 digit" })
        .max(20, { message: "phone must not be more than 10 digit" }),

   

});



module.exports = {signupSchema,loginSchema}

