import React, { useState } from 'react'
import {Row, Col, Card, CardColumns} from 'react-bootstrap';

const Forms = () => {
    return (
		<Row>
			<Col xs={8}>
				<Form></Form>
			</Col>
			<Col>
				<BookDetails bookId={bookSelected} />
			</Col>
		</Row>
	)
}

export default Forms
