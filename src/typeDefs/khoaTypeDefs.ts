import { gql } from 'apollo-server'
export default gql`
  type Mutation {
    createKhoa(data: KhoaInput!): Khoa!
    updateKhoa(data: KhoaInput!): Khoa!
    deleteKhoa(id: ID): Boolean
    
  }

  type Query {
    allKhoa: [Khoa]
  }

  type Khoa{
    id:Int
    MaKhoa:String
    TenKhoa: String
    createdAt: DateTime!
    updatedAt: DateTime!
    deleted: DateTime
  
  }
  
  input KhoaInput {
    id: Int
    MaKhoa: String
    TenKhoa: String
  
  }

  scalar JSON
  scalar DateTime
`

