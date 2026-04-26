import { Outlet } from "react-router"
import Header from "./Header"

export default function Layout() {
    return (
        <>
            <Header />
            
            <main style={{ paddingTop: '64px', minHeight: 'calc(100vh - 64px)' }}>
                <Outlet />
            </main>
        </>
    )
}