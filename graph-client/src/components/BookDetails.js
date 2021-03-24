import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import { getBookById } from './../graph-client/queries'
import { useQuery } from '@apollo/client'

const BookDetails = ({bookId}) => {
    const {loading, error, data} = useQuery(getBookById, {
        variables: {
            id: bookId
        }
    });
    if (loading) return (<p>Loading book detail...</p>)
    
    if (error) return <p>Loading book detail error !!!.</p>
    const book = !loading && !error ? data.book : null

    return (
        <Card bg='info' text='white' className='shadow'>
            <Card.Body>
                {
                    book === null ? <Card.Text>Please select the book.</Card.Text> :
                    <Fragment>
                        <Card.Title>Name: {book.name}</Card.Title>
                        <Card.Subtitle>Genre: {book.genre}</Card.Subtitle>
                        <p>Author: {book.author.name}</p>
                        <p>Age: {book.author.age}</p>
                        <p>All books by this author</p>
                        <ul>
                            {book.author.books.map(book => (
                                <li key={book.id}>{book.name}</li>
                            ))}
                        </ul>
                    </Fragment>
                }
            </Card.Body>
        </Card>
    )
}

export default BookDetails
