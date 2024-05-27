import { NavLink } from "react-router-dom";

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
            <NavLink to="/Home" className="hover:text-lime-600 hover:underline">Home</NavLink>
            <NavLink to="/Books" className="hover:text-lime-600 hover:underline">Libros</NavLink>
            <NavLink to="/Profile" className="hover:text-lime-600 hover:underline">Perfil</NavLink>
            <NavLink to="/AddBook" className="hover:text-lime-600 hover:underline">Añadir Libro</NavLink>
            <NavLink to="/EditBook" className="hover:text-lime-600 hover:underline">Editar Libro</NavLink>
            <NavLink to="/Login" className="hover:text-lime-600 hover:underline">Login</NavLink>
            <NavLink to="/Register" className="hover:text-lime-600 hover:underline">Regístrate</NavLink>

        </nav>

    )
}

export default Menu