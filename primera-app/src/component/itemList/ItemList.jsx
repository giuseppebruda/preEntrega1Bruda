import ItemCard from "../itemCard/ItemCard"



const ItemList = ({productos}) => {

    return(
        <div className="container">
            <div className="row">
            {
                productos.map((prod)=> <ItemCard key={prod.id} item={prod}/>)
            }
        </div>
        </div>
    )
}

export default ItemList