const { gql } = require('@apollo/client');

const createBookRecord = gql`
    mutation createBookMutation($name: String, $genre: String, $authorId: String) {
        createBook (name: $name, genre: $genre, authorId: $authorId) {
            id
            name
            genre
        }
    }
`

export { createBookRecord }