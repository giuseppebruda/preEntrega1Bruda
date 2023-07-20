import "./itemListStyle.scss"
import ItemList from "../itemList/ItemList";
import { useProductos } from "../../hooks/useProductos";

export const ItemListContainer = () => {
    const {productos, loading} = useProductos()
    console.log(productos, loading);
    return(
        <div >
                        {
                loading
                    ? <h2>cargando...</h2>
                    :<ItemList productos={productos}/>
            }
        </div> 
    )
}