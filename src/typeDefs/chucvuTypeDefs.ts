import { gql } from 'apollo-server'
export default gql`
  type Mutation {
    createchucvu(data: ChucvuInput!): Chucvu!
    updatechucvu(data: ChucvuInput!): Chucvu!
    deletechucvu(id: ID): Boolean
    
  }

  type Query {
    allChucvu: [Khoa]
  }

  type Chucvu{
    id:Int
    MaChucvu:String
    TenChucvu: String
    createdAt: DateTime!
    updatedAt: DateTime!
    deleted: DateTime
  
  }
  
  input ChucvuInput {
    id:Int
    MaChucvu:String
    TenChucvu: String
  
  }

  scalar JSON
  scalar DateTime
`

