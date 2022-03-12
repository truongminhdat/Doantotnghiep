import { ApolloError } from 'apollo-server'
import GraphQLJSON from 'graphql-type-json';
const { prisma } = require('../../database')
const { prismaUser } = require('../../database')
import { DateTimeResolver } from 'graphql-scalars'

export default {
    JSON: GraphQLJSON,

    Mutation: {
        createchucvu: async (parent, args, context,) => {
            try {
                const { userId } = context
                const createchucvu = await prisma.chucvu.create({
                    data: {
                        ...args.data,
                    },
                })
                return createchucvu
            }
            catch (e) {
                console.log(e)
                return new ApolloError(`${e}`)

            }
        },
        updatechucvu: async (parent, args, context,) => {
            try {
                const updateKhoa = await prisma.chucvu.update({
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
        deletechucvu: async (parent, args, content,) =>{
            try{
              const now = new Date()
              const deleteKhoa = await prisma.chucvu.update({
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