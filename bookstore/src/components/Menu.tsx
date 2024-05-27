import { NavLink } from "react-router-dom";


type MenuProps = {
    isOpenSidebar?: boolean
}

function Menu (props:MenuProps){
    // const user = null
    const user = "Pepe"

    const {isOpenSidebar} = props

    const commonClasses = 'flex flex-col md:flex-row gap-6 px-5 sm:gap-4 md:gap-5 xl:gap-10 text-xl text-zinc-800';
    const sideBarClasses = isOpenSidebar ? 'flex-col' : '' ;
    const classes = `${commonClasses} ${sideBarClasses}`



    return (
        <nav className={classes}>
            <NavLink to="/Home" className={({ isActive } : { isActive: boolean }) => isActive ? 'text-lime-600 underline' : 'hover:text-lime-600 hover:underline'}>Home</NavLink>
            {user && <NavLink to="/Books" className={({ isActive } : { isActive: boolean }) => isActive ? 'text-lime-600 underline' : 'hover:text-lime-600 hover:underline'}>Libros</NavLink>}
            {user && <NavLink to="/Profile" className={({ isActive } : { isActive: boolean }) => isActive ? 'text-lime-600 underline' : 'hover:text-lime-600 hover:underline'}>Perfil</NavLink>}
            {user && <NavLink to="/AddBook" className={({ isActive } : { isActive: boolean }) => isActive ? 'text-lime-600 underline' : 'hover:text-lime-600 hover:underline'}>Añadir Libro</NavLink>}
            {user &&<NavLink to="/EditBook" className={({ isActive } : { isActive: boolean }) => isActive ? 'text-lime-600 underline' : 'hover:text-lime-600 hover:underline'}>Editar Libro</NavLink>}
            {!user &&<NavLink to="/Login" className={({ isActive } : { isActive: boolean }) => isActive ? 'text-lime-600 underline' : 'hover:text-lime-600 hover:underline'}>Login</NavLink>}
            {!user && <NavLink to="/Register" className={({ isActive } : { isActive: boolean }) => isActive ? 'text-lime-600 underline' : 'hover:text-lime-600 hover:underline'}>Regístrate</NavLink>}

        </nav>

    )
}

export default Menu