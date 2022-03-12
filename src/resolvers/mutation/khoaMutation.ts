import { ApolloError } from 'apollo-server'
import GraphQLJSON from 'graphql-type-json';
const { prisma } = require('../../database')
const { prismaUser } = require('../../database')
import { DateTimeResolver } from 'graphql-scalars'

export default {
    JSON: GraphQLJSON,

    Mutation: {
        createKhoa: async (parent, args, context,) => {
            try {
                const { userId } = context
                const createKhoa = await prisma.khoa.create({
                    data: {
                        ...args.data,
                    },
                })
                return createKhoa
            }
            catch (e) {
                console.log(e)
                return new ApolloError(`${e}`)

            }
        },
        updateKhoa: async (parent, args, context,) => {
            try {
                const updateKhoa = await prisma.khoa.update({
                    where:{
                      id: args.data.id
                    },
                    data:{
                      ...args.data
                    }
                })
                return updateKhoa
            } catch (e) {
                console.log(e)
                return new ApolloError(`${e}`)
                
            }
        },
        deleteKhoa: async (parent, args, content,) =>{
            try{
              const now = new Date()
              const deleteKhoa = await prisma.khoa.update({
                  where:{
                    id: +args.id 
                  },
                  data:{
                    deleted: now
                  }
              })
              return true
            }
            catch(e){
              console.log(e)
            }
          },
    }
}