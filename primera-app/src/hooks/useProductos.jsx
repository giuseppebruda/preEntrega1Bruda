import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import { collection, getDocs, query,where } from "firebase/firestore"
import { db } from "../firebase/config"


export const useProductos = (categoryId) => {
    const [productos, setProductos] = useState([])
    const [loading , setLoading] = useState(true)


    
    useEffect (() => {
        setLoading(true)
        // 1 armar la referencia (sync)
        const productosRef = collection(db, "destinos")
        const q = query (productosRef, where("category", "==", categoryId))
        // 2 llamar la referencia 
        getDocs(q)
        .then((res) =>{
            const docs = res.docs.map((doc) => {
                return{
                    id: doc.id,
                    ...doc.data()
                }
            })
            setProductos(docs);
        })
        .catch(e => console.log(e))
        .finally (()=> setLoading(false))

    },[categoryId])


    return {productos, loading}
}