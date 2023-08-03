import { useState } from "react"



const ItemCount = ({max, counter, setCounter, agregar}) =>{

    const handleRestar = () =>{
        counter > 1 && setCounter(counter - 1)
        
    }

    const handleSumar = () => {
        counter < max && setCounter(counter +1)
    }

    return(
        <div>
            <button onClick={handleSumar}>+</button>
            <span>cantidad:{counter} </span>
            <button onClick={handleRestar}>-</button>  
            <br />
            <button onClick={agregar}>agregar al carrito</button>
        </div>
    )
}

export default ItemCount