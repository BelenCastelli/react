type MenuProps = {
    isOpenSidebar?: boolean
}

function Menu (props:MenuProps){

    const {isOpenSidebar} = props

    const commonClasses = 'px-4 text-xl text-zinc-800 gap-6  md:gap-5 xl:gap-10 '

    const sideBarClasses = 'flex flex-col'

    const headerClasses = 'flex-wrap hidden md:flex'

    const classes = `${commonClasses} ${isOpenSidebar ? sideBarClasses : headerClasses}`
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