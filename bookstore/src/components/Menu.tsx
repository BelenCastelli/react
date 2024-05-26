type MenuProps = {
    isOpenSidebar?: boolean
}

function Menu (props:MenuProps){

    const {isOpenSidebar} = props

    const commonClasses = 'flex flex-col md:flex-row gap-6 px-5 sm:gap-4 md:gap-5 xl:gap-10 text-xl text-zinc-800';
    const sideBarClasses = isOpenSidebar ? 'flex-col' : '' ;
    const classes = `${commonClasses} ${sideBarClasses}`

    return (
        <nav className={classes}>
            <a href="#" className="hover:text-lime-600 hover:underline">Perfil</a>
            <a href="#" className="hover:text-lime-600 hover:underline">Libros</a>
            <a href="#" className="hover:text-lime-600 hover:underline">Añadir libro</a>
            <a href="#" className="hover:text-lime-600 hover:underline">Editar libro</a>
            <a href="#" className="hover:text-lime-600 hover:underline">Log Out</a>
        </nav>

    )
}

export default Menu