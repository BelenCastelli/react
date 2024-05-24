import Book from "../config/types"
import BookItem from "./BookItem"

function Booklist (){

    const books: Book [] = [
        {
            id_book: 1,
            id_user:1,
            photo: 'https://imagessl2.casadellibro.com/a/l/s7/62/9788466657662.webp',
            title: 'El camino de los reyes',
            author: 'Brandon Sanderson',
            type: 'Tapa Dura',
            price: 34.99
           
        }, 
        {
            id_book: 2,
            id_user:1,
            photo: 'https://imagessl9.casadellibro.com/a/l/s7/49/9788466657549.webp',
            title: 'Palabras radiantes',
            author: 'Brandon Sanderson',
            type: 'Tapa Dura',
            price: 34.99
        }, 
        {
            id_book: 3,
            id_user:1,
            photo: 'https://imagessl0.casadellibro.com/a/l/s7/00/9788417347000.webp',
            title: 'Juramentada',
            author: 'Brandon Sanderson',
            type: 'Tapa Dura',
            price: 34.99
        }, 
        {
            id_book: 4,
            id_user:1,
            photo: 'https://imagessl2.casadellibro.com/a/l/s7/32/9788417347932.webp',
            title: 'El ritmo de la guerra',
            author: 'Brandon Sanderson',
            type: 'Tapa Dura',
            price: 34.99
        }, 
        {
            id_book: 1,
            id_user:1,
            photo: 'https://imagessl2.casadellibro.com/a/l/s7/62/9788466657662.webp',
            title: 'El camino de los reyes',
            author: 'Brandon Sanderson',
            type: 'Tapa Dura',
            price: 34.99
           
        }, 
        {
            id_book: 2,
            id_user:1,
            photo: 'https://imagessl9.casadellibro.com/a/l/s7/49/9788466657549.webp',
            title: 'Palabras radiantes',
            author: 'Brandon Sanderson',
            type: 'Tapa Dura',
            price: 34.99
        }, 
        {
            id_book: 3,
            id_user:1,
            photo: 'https://imagessl0.casadellibro.com/a/l/s7/00/9788417347000.webp',
            title: 'Juramentada',
            author: 'Brandon Sanderson',
            type: 'Tapa Dura',
            price: 34.99
        }, 
        {
            id_book: 4,
            id_user:1,
            photo: 'https://imagessl2.casadellibro.com/a/l/s7/32/9788417347932.webp',
            title: 'El ritmo de la guerra',
            author: 'Brandon Sanderson',
            type: 'Tapa Dura',
            price: 34.99
        }
        
    ]

    return (
        <section className="flex flex-wrap justify-center gap-12">
            {
                books.map((book) => (
                    <BookItem key={book.id_book} book={book} /> 
                ))
            }

        </section>
    )
}

export default Booklist