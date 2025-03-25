import Header from "../components/header"
import Footer from "../components/footer"
import { Outlet } from "react-router-dom"
const Mainlayout = () => {
    return (
        <div className="h-screen w-screen font-serif">
                <Header />
                <main className="min-h-screen">
                <Outlet />
                </main>
                <Footer />
        </div>
    )
}
export default Mainlayout;