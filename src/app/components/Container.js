import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Container(props){
    return(
        <main className="bg-neutral-950 grid grid-cols-1">
            <Navbar />
            {props.children}
            <Footer />
        </main>
    )
}