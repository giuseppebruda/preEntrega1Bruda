import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CarContext } from "../../context/CarContext"
import { Link } from "react-router-dom"
import "./itemDetail.scss"




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
        <div className="detail__body">
            <div className="detail__header">
            <div className="detail__city">
            <h2>{item.ciudad}</h2>
            <h4>{item.pais}</h4>
            </div>
            <img className="detail__img" src={item.imgDetail} alt={item.ciudad} />
            
            <section className="detail__info">
            <h2>Descripcion del destino</h2>
            <p>{item.descripcion}</p>
            </section>
            </div>
            {
                isInCar(item.id)
                ? <Link className="btn btn-secondary detail_finish" to={"/car"} >terminar compra</Link>
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