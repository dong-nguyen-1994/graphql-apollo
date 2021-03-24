import React, { useState } from 'react'
import {Card, CardColumns, Row, Col} from 'react-bootstrap'

import BookDetails from './BookDetails'

import { useQuery } from '@apollo/client'
import { getBooks } from '../graph-client/queries'

const BookList = () => {
    const [bookSelected, setBookSelected] = useState(null);

    const {loading, error, data} = useQuery(getBooks);
    if (loading) return (<p>Loading books...</p>)
    
    if (error) return <p>Loading books error !!!.</p>
    
    return (
		<Row>
			<Col xs={8}>
				<CardColumns>
					{data.books.map(book => (
						<Card
							border='info'
							text='info'
							className='text-center shadow'
							key={book.id}
							onClick={setBookSelected.bind(this, book.id)}
							style={{ cursor: 'pointer' }}
						>
							<Card.Body>{book.name}</Card.Body>
						</Card>
					))}
				</CardColumns>
			</Col>
			<Col>
                <BookDetails bookId={bookSelected} />
			</Col>
		</Row>
	)
}

export default BookList;
