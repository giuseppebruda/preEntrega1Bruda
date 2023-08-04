import "./Header.scss"
import { Link } from "react-router-dom"
import Menu from "../nav/Menu"
import CarWidget from "./CarWidget"

export const Header = () => {

    return(
        <header className="header">
            <h1 className="title">GB viajes</h1>
            <Menu/>
            <CarWidget/>
        </header>
    )
}