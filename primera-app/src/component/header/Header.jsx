import "./Header.scss"
import { Link } from "react-router-dom"

export const Header = () => {

    return(
        <header className="header">
            <h1 className="title">GB viajes</h1>
            <nav className="nav">
                <ul className="nav__container">
                    <li className="nav__item"><Link to="/">home</Link></li>
                    <li className="nav__item"><Link to="/destinos">destinos</Link></li>
                    <li className="nav__item"><Link to="/promociones">promociones</Link></li>
                    <li className="nav__item"><Link to="/nosotros">nosotros</Link></li>
                    <li className="nav__item"><Link to="/destinos/local">locales</Link></li>
                    <li className="nav__item"><Link to="/destinos/internacional">internacionales</Link></li>
                </ul>
            </nav>
            <div className="carrito__container">
            <img className="carrito" src="/carrito.svg" alt="carrito" />
            <br />
            <p className="counter">0</p>
            </div>
            
        </header>
    )
}