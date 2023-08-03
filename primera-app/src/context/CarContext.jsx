import { createContext , useState } from "react";




export const CarContext = createContext()

export const CarProvider = ({children}) => {
    const [car, setCar] =useState([])
    console.log(car);

    const agregarAlCarrito = (item) => {
        setCar([...car, item])
    }

    const isInCar = (id) => {
        return car.some((item) => item.id === id)
    }

    return(
        <CarContext.Provider value={{
            car,
            agregarAlCarrito,
            isInCar
        }}>
            {children}
        </CarContext.Provider>
    )
}