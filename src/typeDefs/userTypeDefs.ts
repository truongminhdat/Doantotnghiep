import { gql } from 'apollo-server'

export default gql`
  type Mutation {
    signupUser(data: UserCreateInput!): AuthPayload!
    signupLocalUser(data: UserCreateInput!): AuthPayload!
  }

  type Query {
    allUsers: [User!]!
    signIn(email: String!, password: String!): AuthPayload!
    
  }
  type User{
    email: String!
    id: ID!
    name: String
  }
  type AuthPayload {
    token: String
    user: User
  }
  input UserCreateInput {
    email: String!
    name: String
    password: String!
    password_confirmation: String!
  }
  input UserUpdateInput {
    id: ID
    first_name: String
    name: String
    # phone_number: String
    # # avatar_attachment:     JSON
    # # background_attachment: JSON
    address:               String
    country:               String
    gender:                String
    date_of_birth:         String
  }
  input UserUniqueInput {
    email: String
    id: ID
  }

  scalar DateTime
  `
 