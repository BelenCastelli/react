
import Booklist from "../components/Booklist";



function BooksPage () {

    return (
       <div className="w-10/12 mt-36 mb-6 p-6 flex flex-col items-center justify-center gap-6 bg-green-100 rounded">
            <h1 className="text-3xl font-bold">Mis Libros</h1>
            <Booklist/>
          
       </div>

    )
}

export default BooksPage

