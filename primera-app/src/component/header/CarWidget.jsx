import {GiShoppingCart} from "react-icons/gi"
import "./Header.scss"
import { Link } from "react-router-dom"
import { useCallback, useContext } from "react"
import { CarContext } from "../../context/CarContext"

const CarWidget = () => {
    const {totalCantidad} = useContext(CarContext)

    return (
        <Link to={"/car"} className="carrito__container">
            <GiShoppingCart className="carrito"/>
            <span className="counter">{totalCantidad()}</span>
        </Link>
    )
}

export default CarWidget