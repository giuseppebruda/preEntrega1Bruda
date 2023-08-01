import {LuMenu} from "react-icons/lu"
import "./menu.scss"
import MenuList from "./MenuList"
import { useState } from "react"


const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleOpen = () => {
        setShowMenu(true)
        console.log(handleOpen);
    }
    const handleClose = () => {
        setShowMenu(false)
        console.log(handleClose);
    }

    


    return(
        <div className={showMenu ? "menu-active" : "" }>
            <div>
                <LuMenu onClick={handleOpen} className="navbar__icon"/>
            </div>
            
            <div className="menu__backdrop" onClick={handleClose}>
                <MenuList handelClouse={handleClose}/>
            </div>

        </div>
    )
}

export default Menu