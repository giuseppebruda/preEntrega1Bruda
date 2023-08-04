import { createContext , useState } from "react";




export const CarContext = createContext()

export const CarProvider = ({children}) => {
    const [car, setCar] =useState([])
    console.log(car);

    const agregarAlCarrito = (item) => {
        setCar([...car, item])
    }

    const removerDelCarrito = (id) => {
        setCar(car.filter((item) => item.id !==id))
    }

    const isInCar = (id) => {
        return car.some((item) => item.id === id)
    }

    const totalCompra = () => {
        return car.reduce((acc,item) =>acc + item.precio * item.cantidad,0)
    }

    const vaciarCarrito = () => {
        setCar([])
    }

    const totalCantidad = () =>{
        return car.reduce((acc,item) => acc + item.cantidad,0)
    }


    return(
        <CarContext.Provider value={{
            car,
            agregarAlCarrito,
            isInCar,
            totalCompra,
            vaciarCarrito,
            totalCantidad,
            removerDelCarrito
        }}>
            {children}
        </CarContext.Provider>
    )
}