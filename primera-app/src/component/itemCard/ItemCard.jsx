import { Link } from "react-router-dom"

const ItemCard = ({item}) => {
    return(
        <div className="col-3 m-4">
            
            <h5>{item.ciudad}</h5>
            <img src= {item.img} alt={item.img} />
            <p>{item.descripcion}</p>
            <p>precio: ${item.precio}</p>
            <Link to={`/detail/${item.id}`} className="btn btn-primary"> ver mas</Link>
            </div>
    )
    }
    
    export default ItemCard