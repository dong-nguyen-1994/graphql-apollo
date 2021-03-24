import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import { useMutation } from '@apollo/client';
import { getAuthors } from '../graph-client/queries';
import { createAuthorRecord } from '../graph-client/mutation';

const AuthorForm = () => {
    const [newAuthor, setNewAuthor] = useState({
        name: '',
        age: ''
    });

    const {name, age} = newAuthor;

    const onInputChange = event => {
        setNewAuthor({
            ...newAuthor,
            [event.target.name]: event.target.value
        });
    }

    const onSubmitForm = event => {
        event.preventDefault();
        addAuthor({
            variables: { name, age: parseInt(newAuthor.age)},
            refetchQueries: [{ query: getAuthors }]
        });
        setNewAuthor({name: '', age: '' });
    }

    // Mutation
    const [addAuthor, dataMutation] = useMutation(createAuthorRecord);

    return (
        <Form onSubmit={onSubmitForm}>
            <Form.Group className="invisible">
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Author name" name="name" onChange={onInputChange} value={newAuthor.name}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type="number" placeholder="Author age" name="age" onChange={onInputChange} value={newAuthor.age}></Form.Control>
            </Form.Group>
            <Button className="float-right" variant="info" type="submit">Add Author</Button>
        </Form>
    )
}

export default AuthorForm
