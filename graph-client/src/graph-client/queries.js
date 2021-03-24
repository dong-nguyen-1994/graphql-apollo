import { gql } from "@apollo/client";

const getBooks = gql`
    query getBooksQuery {
        books {
            id
            name
            genre
        }
    }
`

const getBookById = gql`
    query getSingleBookQuery($id: String) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    genre
                }
            }
        }
    }
`

const getAuthors = gql`
    query getAuthorsQuery {
        authors {
            id
            name
            age
        }
    }
`

export { getBooks, getBookById, getAuthors }
