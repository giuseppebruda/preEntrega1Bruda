import { useContext } from "react"
import { CarContext } from "../../context/CarContext"



const CarView  = () => {
    const {Car} = useContext(CarContext)

    return(
        <div>
            <h2>tu compra</h2>
            <hr />

            {
                Car.map((item) => (
                    <div>
                        <h3>{item.ciudad}</h3>
                        <img src={item.img} alt={item.ciudad} />
                        <p>precio: ${item.precio * item.cantidad}</p>
                        <p>cantidad : {item.cantidad}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}

export default CarView