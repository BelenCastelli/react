function Menu (){
    // import styles from './Header.module.css';
    return (
        <nav className="px-4 text-xl text-zinc-800 flex gap-4 sm:gap-5 md:gap-7 xl:gap-10 flex-wrap">
            <a href="#" className="hover:text-lime-600 hover:underline">Perfil</a>
            <a href="#" className="hover:text-lime-600 hover:underline">Libros</a>
            <a href="#" className="hover:text-lime-600 hover:underline">Añadir libro</a>
            <a href="#" className="hover:text-lime-600 hover:underline">Editar libro</a>
            <a href="#" className="hover:text-lime-600 hover:underline">Log Out</a>
        </nav>
    )
}

export default Menu