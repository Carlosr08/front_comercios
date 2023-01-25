import { gql } from '@apollo/client'

export const Register = gql`
  mutation createUser($input: UserInput){
    createUser(input: $input){
      id
      name
      username
      email
      createAt
    }
  }
`
export const Login = gql`
  mutation login($input: LoginInput){
    login(input: $input){
      token
    }
  }
`
