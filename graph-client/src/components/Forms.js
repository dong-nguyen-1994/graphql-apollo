import React from 'react'
import {Row, Col} from 'react-bootstrap';

import BookForm from './BookForm'
import AuthorForm from './AuthorForm'

const Forms = () => {
    return (
		<Row>
			<Col>
				<BookForm></BookForm>
			</Col>
			<Col>
                <AuthorForm></AuthorForm>
			</Col>
		</Row>
	)
}

export default Forms;
