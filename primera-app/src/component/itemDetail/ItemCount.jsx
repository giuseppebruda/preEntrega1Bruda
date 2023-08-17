import "./itemDetail.scss"



const ItemCount = ({max, counter, setCounter, agregar}) =>{

    const handleRestar = () =>{
        counter > 1 && setCounter(counter - 1)
        
    }

    const handleSumar = () => {
        counter < max && setCounter(counter +1)
    }

    return(
        <div className="count__container">
            <button className="count__botton" onClick={handleSumar}>+</button>
            <span>cantidad:{counter} </span>
            <button className="count__botton" onClick={handleRestar}>-</button>  
            <br />
            <button className="button__add" onClick={agregar}>agregar al carrito</button>
        </div>
    )
}

export default ItemCount