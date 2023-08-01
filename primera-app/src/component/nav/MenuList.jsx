import { Link } from "react-router-dom"
import {AiOutlineCloseCircle} from "react-icons/ai"

const MenuList = ({handelClouse}) => {

    return (
        <nav onClick={(e) => e.stopPropagation()} className="nav">
            < AiOutlineCloseCircle onClick={handelClouse}/>
            <Link onClick={handelClouse} className="nav__item" to="/">home</Link>
            <Link onClick={handelClouse} className="nav__item" to="/destinos">destinos</Link>
            <Link onClick={handelClouse} className="nav__item" to="/promociones">promociones</Link>
            <Link onClick={handelClouse} className="nav__item" to="/nosotros">nosotros</Link>
            <Link onClick={handelClouse} className="nav__item" to="/destinos/local">locales</Link>
            <Link onClick={handelClouse} className="nav__item" to="/destinos/internacional">internacionales</Link>
    </nav>
    )
}

export default MenuList