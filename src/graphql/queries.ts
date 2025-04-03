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
