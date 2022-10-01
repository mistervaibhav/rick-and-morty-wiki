import { gql } from "@apollo/client";

export const GET_CHARACTERS_LIST = gql`
  query GetCharactersList($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;
