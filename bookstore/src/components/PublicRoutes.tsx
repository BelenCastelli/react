import { Navigate, Outlet } from "react-router-dom"

function PublicRoutes() {
        // const user = null
        const user = "Pepe"

        if (user) return <Navigate to="/Home" />

        return <Outlet />
}

export default PublicRoutes