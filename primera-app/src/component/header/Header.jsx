import "./Header.scss"
import { Link } from "react-router-dom"
import Menu from "../nav/Menu"

export const Header = () => {

    return(
        <header className="header">
            <h1 className="title">GB viajes</h1>
            <Menu/>
            <div className="carrito__container">
            <img className="carrito" src="/carrito.svg" alt="carrito" />
            <br />
            <p className="counter">0</p>
            </div>
            
        </header>
    )
}