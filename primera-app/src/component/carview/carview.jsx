import { useContext } from "react"
import { CarContext } from "../../context/CarContext"
import {BsTrash} from "react-icons/bs"
import { Link } from "react-router-dom"


const CarView  = () => {
    const {car, totalCompra,vaciarCarrito,removerDelCarrito} = useContext(CarContext)

    return(
        <div>
            {
                car.length === 0
                ? <>
                <h2> carito vacio :(</h2>
                <hr />

                <button className="btn btn-primary"><Link to= "/destinos">ir a comprar</Link></button>
                </>
                :<>
                <h2>tu compra</h2>
            <hr />

            {
                car.map((item) => (
                    <div key={item.id}>
                        <h3>{item.ciudad}</h3>
                        <img src={item.img} alt={item.ciudad} />
                        <p>precio: ${item.precio * item.cantidad}</p>
                        <p>cantidad : {item.cantidad}</p>
                        <hr />
                        <button className="btn btn-danger" onClick={() => removerDelCarrito(item.id)}><BsTrash/></button>
                    </div>
                ))

            }
            <div>
            <h3>total: ${totalCompra()}</h3>
            <button onClick={vaciarCarrito}>Vaciar el carrito</button>
            <Link className="btn btn-primary" to= "/checkout" >terminar mi compra</Link>
            </div>
                </>
            }
            
        </div>
    )
}

export default CarView