import { useState } from "react"
import ItemCount from "./ItemCount"




const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    
    return ( 
        <div>
            <h2>{item.pais}</h2>
            <h2>{item.ciudad}</h2>
            <img src={item.img} alt={item.ciudad} />
            <p>{item.descripcion}</p>
            <ItemCount 
            max ={item.stock}
            counter = {cantidad}
            setCounter={setCantidad}
            />
        </div>
    )
}

export default ItemDetail