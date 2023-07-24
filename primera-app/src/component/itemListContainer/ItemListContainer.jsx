import "./itemListStyle.scss"
import ItemList from "../itemList/ItemList";
import { useProductos } from "../../hooks/useProductos";
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {
    const {categoryId} = useParams()
    const {productos, loading} = useProductos(categoryId)
    console.log();(productos,loading)
    return(
        
        <div >
                        {
                loading
                    ? <h2>cargando...</h2>
                    :<ItemList productos={productos}
                    />
            }
        </div> 
    )
}