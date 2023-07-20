
const ItemCard = ({item}) => {
    return(
        <div className="col-3 m-4">
            <h4>{item.pais}</h4>
            <h5>{item.ciudad}</h5>
            <img src= {item.img} alt={item.img} />
            <p>{item.descripcion}</p>
            <p>precio: ${item.precio}</p>
            <button className="btn btn-primary"> ver mas</button>
            </div>
    )
    }
    
    export default ItemCard