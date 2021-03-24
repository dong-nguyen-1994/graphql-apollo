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

export { getBooks }
