import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <>
            <Header />
            
            <main style={{ paddingTop: '64px', minHeight: 'calc(100vh - 64px)' }}>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}