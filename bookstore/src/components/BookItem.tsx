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
        <article className="border-2 border-gray-800/20 w-5/12 xl:w-3/12 sm:w-5/12 md:w-5/12 lg:w-4/12 rounded">
            <img src= {book.photo} alt={book.title} className="w-full"/>
            <div className="flex flex-col gap-2 p-1 sm:p-1 md:p-2 lg:p-3">
                <span className="sm:text-xs  md:text-sm lg:text-base xl:text-lg 2xl:text-2xl text-xs font-bold">{book.title}</span>
          
                <div className="flex items-center justify-between sm:text-xs  md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-xs ">
                    <span className="text-gray-600">{book.author}</span>
                    <span className="bg-green-300 py-1 px-4 sm:px-1 md:px-2 lg:px-3 rounded-full text-center">{book.type}</span>
           
                </div>
                <div className="flex items-center sm:text-xs  md:text-sm lg:text-base xl:text-lg 2xl:text-2xl text-xs ">
                    <span className="italic">{book.price}</span>
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