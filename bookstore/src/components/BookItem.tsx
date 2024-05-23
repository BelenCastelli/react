import Book from "../types/book";

type BookItemProps =  {
    book: Book;
  }

function BookItem (props: BookItemProps) {
    const {book} = props

    return (
        <div className="border border-slate-800 w-80 flex flex-col justify-center items-center bg-slate-300 rounded">
            <img src= {book.bookCover} alt={book.title} className="w-full"/>
            <h2>{book.title}</h2>
            <div className="flex w-full justify-around">
                <h3>{book.author}</h3>
                <p className="bg-slate-400 px-2">{book.genre}</p>
            </div>
            <p>{book.price}</p>

        </div>
    )
}


export default BookItem