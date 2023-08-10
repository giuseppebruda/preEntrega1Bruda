import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from "../itemDetail/itemDetail"
import Loader from "../loader/Loader"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading,setLoading] = useState(true)
    
    const {itemId} = useParams()
    useEffect(() => {
        setLoading(true)
            const itemRef = doc(db, "destinos", itemId)
            getDoc(itemRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch(e => console.log(e))
            .finally(()=> setLoading(false))

    
    },[])

    return ( 
        <div>
            {
                loading
                ? <Loader/>
                : <ItemDetail  item={item}/>
            }
        </div>
    )
}

export default ItemDetailContainer