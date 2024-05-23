function Menu (){
    // import styles from './Header.module.css';
    return (
        <nav className="w-full p-2 text-xl text-zinc-800 flex justify-evenly flex-wrap">
            <a href="#" className="hover:text-lime-600 hover:underline">Perfil</a>
            <a href="#" className="hover:text-lime-600 hover:underline">Libros</a>
            <a href="#" className="hover:text-lime-600 hover:underline">Añadir libro</a>
            <a href="#" className="hover:text-lime-600 hover:underline">Editar libro</a>
            <a href="#" className="hover:text-lime-600 hover:underline">Log Out</a>
        </nav>
    )
}

export default Menu