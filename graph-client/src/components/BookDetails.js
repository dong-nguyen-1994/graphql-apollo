import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import { getSingleBook } from '../graphql-client/queries'
import { useQuery } from '@apollo/client'

export const BookDetails = () => {
    return (
        <Card bg='info' text='white' className='shadow'>
			<Card.Body>
				{book === null ? (
					<Card.Text>Please select a book</Card.Text>
				) : (
					<Fragment>
						<Card.Title>{book.name}</Card.Title>
						<Card.Subtitle>{book.genre}</Card.Subtitle>
						<p>{book.author.name}</p>
						<p>Age: {book.author.age}</p>
						<p>All books by this author</p>
						<ul>
							{book.author.books.map(book => (
								<li key={book.id}>{book.name}</li>
							))}
						</ul>
					</Fragment>
				)}
			</Card.Body>
		</Card>
    )
}
