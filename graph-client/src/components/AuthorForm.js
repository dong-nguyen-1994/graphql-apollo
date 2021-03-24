import React from 'react'
import { Form, Button } from 'react-bootstrap'

const AuthorForm = () => {
    return (
        <Form>
            <Form.Group className="invisible">
                <Form.Control />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Author name"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type="number" placeholder="Author age"></Form.Control>
            </Form.Group>
            <Button className="float-right" variant="info" type="submit">Add Book</Button>
        </Form>
    )
}

export default AuthorForm
