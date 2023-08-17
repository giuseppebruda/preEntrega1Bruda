import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./itemCard.scss"
const ItemCard = ({item}) => {
    return(
        <div className="col-3 m-5">
            <Card className="card__container" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.img} />
    <Card.Body className="card__body">
        <Card.Title><p className="card__pais">{item.pais}</p></Card.Title>
        <Card.Title><p className="card__ciudad">{item.ciudad}</p></Card.Title>
        <Card.Text><p className="card__descripcion">{item.descripcionCorta}</p></Card.Text>
        <Card.Text><p className="card__precio">precio: ${item.precio}</p></Card.Text>
        <Link className="card__verMas" to={`/detail/${item.id}`}> ver mas</Link>
    </Card.Body>
    </Card>
            </div>
    )
    }
    
    export default ItemCard

