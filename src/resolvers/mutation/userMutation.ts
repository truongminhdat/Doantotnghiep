
// const { prisma } = require('../../database')
import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'
import { ApolloError } from 'apollo-server'
import axios from 'axios'
import { arch } from 'os'
const { prisma } = require("../../database")

export default {
    Mutation: {
        signupLocalUser: async (parent, args, context) => {
            try {
                const checkEmail = await prisma.user.findUnique({
                    where: {
                        email: args.data.email
                    }
                })
                if (checkEmail) {
                    return new ApolloError("email is full of ears")
                }

                const postData = args.data.posts?.map((post) => {
                    return { title: post.title, content: post.content || undefined }
                })
                if (args.data.password != args.data.password_confirmation) {
                    return new ApolloError("password in correct ")
                }
                const password = await bcrypt.hash(args.data.password, 10)
                const user = await prisma.user.create({
                    data: {
                        name: args.data.name,
                        email: args.data.email,
                        password,

                    },
                })
                const token = jwt.sign({ userId: user.id }, `${process.env.APP_SECRET}`)
                return {
                    token,
                    user,
                }
            }

            catch (e) {
                console.log(e)
            }
        },
        Login:async (parent, args, context) => {
            try{
          const user = await prisma.user.findUnique({
             where:{
                 email: args.email
             }
          })
          if (!user) {
            throw new Error(`No such user found for email: ${args.email}`)
          }
      
          const password = await bcrypt.compare(args.password, user.password)
          if (!password) {
            throw new Error('Mat khau khong dung ')
          }
        
          const token = jwt.sign({ userId: user.id }, `${process.env.APP_SECRET}`)
          return {
              token,
              user,
          }
          }
          catch(e){
              console.log(e)
          }
        },
        resetPasswordRequest:async (parent,args,context) => {
            try{

                const user = await prisma.user.findUnique({
                    where:{
                    email: args.email
                    }
                }) 
                const token = jwt.sign({ userId: user.id}, process.env.APP_SECRET, { expiresIn: '1h'})
         
                // Send email to user with url and token
                console.log(token) // TODO: implement sending of email with url and token
            
                return { email: user.email }
            }catch(e){
                console.log(e)
            }
        },
     resetPassword: async (parent,args,context) => {
         try{
            const { userId } = context
            const userExists =  prisma.user.findUnique({
                where:{
                    id: userId
                }
            })
            if (!userExists) {
              throw new Error(`User doesn't exist.`)
            }
        
            // If no error, set new password.
            const Newpassword = await bcrypt.hash(args.password, 10)
            const userUpdate = await prisma.User.update({
                where:{
                    id :userId 
                },
                 data:{
                     password : Newpassword
                 }
            })
            return userUpdate   


         }catch(e){
             console.log(e)
         }
   
        }


    }
    }
