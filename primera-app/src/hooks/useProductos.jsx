import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"


export const useProductos = (categoryId) => {
    const [productos, setProductos] = useState([])
    const [loading , setLoading] = useState(true)

    
    useEffect (() => {
        setLoading(true)

        pedirDatos()
        .then( r => {
            if (categoryId){
                setProductos(r.filter(prod => prod.category ===categoryId))
            }else{
                setProductos(r)
            }
        })
        .catch( e => console.log(e))
        .finally(()=> {
            setLoading(false)
        })
    },[categoryId])


    return {productos, loading}
}