import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"


export const useProductos = (categoryId) => {
    const [productos, setProductos] = useState([])
    const [loading , setLoading] = useState(true)

    
    useEffect (() => {
        setLoading(true)
        // 1 armar la referencia (sync)
        const productosRef = collection(db, "destinos")
        // 2 llamar la referencia 
        getDocs(productosRef)
        .then((res) =>{
            const docs = res.docs.map((doc) => doc.data())
            console.log(docs);
        })
        .catch(e => console.log(e))
        .finally (()=> setLoading(false))

    },[categoryId])


    return {productos, loading}
}