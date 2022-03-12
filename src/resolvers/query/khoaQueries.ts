
const _ = require('lodash')
import { ApolloError } from 'apollo-server';
import { isNonNullType } from 'graphql';
import { PhoneNumberResolver } from 'graphql-scalars';
import GraphQLJSON from 'graphql-type-json';
const { prisma, prismaUser, getUsers } = require('../../database')

export default {
    JSON: GraphQLJSON,

    Query: {
        allKhoa: async (parent, args, context) => {
            try {
                const listProject = await prisma.khoa.findMany({
                    where: {
                        deleted: null,

                    },
                })
                return listProject

            }
            catch (e) {
                console.log(e)
            }
        },
        }
    }
