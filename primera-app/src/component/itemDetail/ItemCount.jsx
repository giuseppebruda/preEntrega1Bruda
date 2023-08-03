import { useState } from "react"



const ItemCount = ({max, counter, setcounter}) =>{

    const [counter, setcounter] = useState(1)

    const handleRestar = () =>{
        counter > 1 && setcounter(counter - 1)
        
    }

    const handleSumar = () => {
        counter < max && setcounter(counter +1)
    }

    return(
        <div>
            <button onClick={handleSumar}>+</button>
            <span>cantidad:{counter} </span>
            <button onClick={handleRestar}>-</button>  
            <br />
            <button>agregar al carrito</button>
        </div>
    )
}

export default ItemCount