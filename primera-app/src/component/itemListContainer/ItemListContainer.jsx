import "./itemListStyle.scss"
import ItemList from "../itemList/ItemList";
import { useProductos } from "../../hooks/useProductos";
import { useParams } from "react-router-dom"
import Loader from "../loader/Loader";


export const ItemListContainer = () => {
    const {categoryId} = useParams()
    const {productos, loading} = useProductos(categoryId)
    console.log();(productos,loading);
    return(
        
        <div  className="item__container">
                        {
                loading
                    ? <Loader/>
                    :<ItemList productos={productos}
                    />
            }
        </div> 
    )
}