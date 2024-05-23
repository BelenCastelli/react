import BookItem from "../components/BookItem";
import Book from "../types/book";


function BooksPage () {
    const book1:Book = {
        bookCover: 'https://imagessl2.casadellibro.com/a/l/s7/62/9788466657662.webp',
        title: 'El camino de los reyes',
        author: 'Brandon Sanderson',
        genre: 'Fantasía',
        price: 34.99
    }
    return (
        <>
        <BookItem book={book1}/>
        </>
    )
}

export default BooksPage

