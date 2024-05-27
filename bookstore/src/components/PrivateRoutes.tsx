import { Navigate, Outlet } from "react-router-dom"

function PrivateRoutes() {
        // const user = null
        const user = "Pepe"

        if (!user) return <Navigate to="/Login" />

        return <Outlet />
}

export default PrivateRoutes