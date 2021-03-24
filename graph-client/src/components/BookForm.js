import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const BookForm = () => {
    return (
		<Form>
            <Form.Group>
                <Form.Control type="text" placeholder="Book name"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Book genre"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Control as="select" defaultValue="Select author">
                        <option disabled> Select author</option>
                </Form.Control>
            </Form.Group>
            <Button className="float-right" variant="info" type="submit">Add Book</Button>
        </Form>
	)
}

export default BookForm;