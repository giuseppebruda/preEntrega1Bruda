import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CarContext } from "../../context/CarContext"
import { Link } from "react-router-dom"




const ItemDetail = ({item}) => {
    const {agregarAlCarrito, isInCar} = useContext(CarContext)
    const [cantidad, setCantidad] = useState(1)
    console.log(isInCar.id);
    const agregar = () =>{
        const newItem= {
            ...item,
            cantidad
        }
        agregarAlCarrito(newItem)
    }
    return ( 
        <div>
            <h2>{item.pais}</h2>
            <h2>{item.ciudad}</h2>
            <img src={item.img} alt={item.ciudad} />
            <p>{item.descripcion}</p>

            {
                isInCar(item.id)
                ? <Link className="btn " to={"/car"} >terminar compra</Link>
                : <ItemCount 
                max ={item.stock}
                counter = {cantidad}
                setCounter={setCantidad}
                agregar = {agregar}
                />
            }
            
        </div>
    )
}

export default ItemDetail