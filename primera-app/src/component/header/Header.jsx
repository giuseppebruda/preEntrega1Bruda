import "./Header.scss"

export const Header = () => {

    return(
        <header className="header">
            <h1 className="title">GB viajes</h1>
            <nav className="nav">
                <ul className="nav__container">
                    <li className="nav__item"><a href="#">home</a></li>
                    <li className="nav__item"><a href="#">destinos</a></li>
                    <li className="nav__item"><a href="#">promociones</a></li>
                    <li className="nav__item"><a href="#">nosotros</a></li>
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