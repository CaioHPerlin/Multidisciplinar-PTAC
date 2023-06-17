import Navbar from "./Navbar"

export default function Container(props){
    return(
        <main className="bg-neutral-950 grid grid-cols-1">
            <Navbar />
            {props.children}
        </main>
    )
}