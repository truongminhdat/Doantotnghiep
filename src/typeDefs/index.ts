import userTypeDefs from './userTypeDefs'
import khoaTypeDefs from './khoaTypeDefs'
import { gql } from 'apollo-server-express'
import chucvuTypeDefs from './chucvuTypeDefs'

const baseTypeDefs = gql`
  type Query
`
const typeDefs = [baseTypeDefs, 
  userTypeDefs,khoaTypeDefs,chucvuTypeDefs
]
export { typeDefs }