import Book from "../config/types";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";



type BookItemProps =  {
    book: Book;
  }

function BookItem (props: BookItemProps) {
    const {book} = props

    function handleEditBook (){
        console.log('Editar');
        
    }

    function handleDeleteBook () {
        console.log('eliminar');
        
    }

    return (
        <article className="m-8 border-2 border-gray-800 w-1/5">
            <img src= {book.photo} alt={book.title} className="w-full"/>
            <div className="p-4 flex flex-col gap-2">
                <span className="text-2xl font-bold">{book.title}</span>
          
                <div className="flex items-center justify-between">
                    <span className="text-xl text-gray-600">{book.author}</span>
                    <span className="bg-teal-400 py-1 px-4 rounded-full text-white font-bold">{book.type}</span>
           
                </div>
                <div className="flex items-center">
                    <span className="text-2xl italic">{book.price}</span>
                    <button className="ml-auto" onClick={handleEditBook}>
                        <CiEdit className="text-indigo-700" size={20} />
                    </button>
                    <button onClick={handleDeleteBook}>
                        <FaRegTrashAlt className="text-red-500" size={16} />
                    </button>
                </div>


            </div>
        </article>
    )
}


export default BookItem