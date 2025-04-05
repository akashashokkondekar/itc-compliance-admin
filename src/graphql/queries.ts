import { gql } from "@apollo/client/core";

export const GET_USERS = gql`
  query {
    users {
      id
      name
      email
      role
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        role
      }
    }
  }
`;
