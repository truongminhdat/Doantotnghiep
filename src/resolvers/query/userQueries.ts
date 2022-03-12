
const _ = require('lodash')
const { prisma } = require('../../database')
import * as bcrypt from 'bcryptjs'
import { ApolloError } from 'apollo-server'
import axios from 'axios'

export default {
  
  Query: {
    allUsers: async (parent, args, context) => {
      try {
        const allUser = await prisma.user.findMany({
          id: args.userId
        })
        return allUser
      } catch (e) {
        console.log(e)
        return new ApolloError(`${e}`)
      }
    },
    
    signIn: async (parent, args, context) => {
      const user = await prisma.user.findUnique({
        where: { email: args.email },
      })
      if (!user) {
        return new ApolloError("Invalid email or password!")
      }
      const valid = await bcrypt.compare(args.password, user.password)
      if (!valid) {
        return new ApolloError("Invalid email or password!")
      }
      const getToken = await axios.get(`${process.env.URL_SMILE_EYE_API}/return-token`,
        {
          params: {
            id: user.id
          }
        }
      );
      const token = getToken.data
      return {
        token,
        user,
      }
    },
  }
}

