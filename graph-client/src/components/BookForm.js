import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {useQuery, useMutation} from '@apollo/client';
import { getAuthors, getBooks } from '../graph-client/queries';
import { createBookRecord } from '../graph-client/mutation';

const BookForm = () => {
    //state
    const [newBook, setNewBook] = useState({
        name: '',
        genre: '',
        author: ''
    });

    const {name, genre, authorId} = newBook;

    const onInputChange = event => {
        setNewBook({
            ...newBook,
            [event.target.name]: event.target.value
        });
    }

    const onSubmitForm = event => {
        event.preventDefault();
        addBook({
            variables: { name, genre, authorId },
            refetchQueries: [{ query: getBooks }]
        });
        setNewBook({name: '', genre: '', authorId: ''});
    }

    // Query
    const {loading, error, data} = useQuery(getAuthors);

    // Mutation
    const [addBook, dataMutation] = useMutation(createBookRecord);
    console.log(dataMutation);

    if (loading) return (<p>Loading books...</p>)
    if (error) {
        return <p>Error when loading author: {error.message}</p>
    }
    return (
		<Form onSubmit={onSubmitForm}>
            <Form.Group>
                <Form.Control required type="text" placeholder="Book name" name="name" onChange={onInputChange} value={newBook.name}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control required type="text" placeholder="Book genre" name="genre" onChange={onInputChange} value={newBook.genre}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control required as="select" name="authorId" onChange={onInputChange} value={newBook.authorId}>
                    <option value=""> Select author</option>
                    {data.authors.map( (author) => {
                        return <option key={author.id} value={author.id}>{author.name}</option>
                    })}
                </Form.Control>
            </Form.Group>
            <Button className="float-right" variant="info" type="submit">Add Book</Button>
        </Form>
	)
}

export default BookForm;