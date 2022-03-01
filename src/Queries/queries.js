import { gql } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    allauthors {
      name
      age
      id
    }
  }
`;
const getBooksQuery = gql`
  {
    allbooks {
      name
      id
      genre
    }
  }
`;
const addBookQuery = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addbooks(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
const getbookdetails = gql`
  query ($id: ID) {
    kitab(id: $id) {
      name
      genre
      author {
        name
        age
        kitab {
          name
          genre
          id
        }
      }
    }
  }
`;
export { getAuthorsQuery, getBooksQuery, addBookQuery, getbookdetails };
