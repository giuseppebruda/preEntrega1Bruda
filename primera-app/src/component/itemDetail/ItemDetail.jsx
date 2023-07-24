


const ItemDetail = ({item}) => {

    return ( 
        <div>
            <h2>{item.pais}</h2>
            <h2>{item.ciudad}</h2>
            <img src={item.img} alt={item.ciudad} />
            <p>{item.descripcion}</p>
            <button>agregar al carrito</button>
            <button>+</button>
            <span>cantidad: </span>
            <button>-</button>
        </div>
    )
}

export default ItemDetail