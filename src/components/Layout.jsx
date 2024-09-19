/* eslint-disable */

import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {

    return (
        <main className="min-h-screen overflow-y-hidden overflow-x-hidden ">
            <Navbar />
            {children}
            {/* <Footer /> */}
        </main>
    )
}