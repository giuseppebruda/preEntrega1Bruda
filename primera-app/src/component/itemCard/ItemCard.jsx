import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./itemCard.scss"
const ItemCard = ({item}) => {
    return(
        <div className="col-3 m-5">
            <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
        <Card.Title className="card__pais">{item.pais}</Card.Title>
        <Card.Title className="card__ciudad">{item.ciudad}</Card.Title>
        <Card.Text className="card__descripcion"  >{item.descripcionCorta}</Card.Text>
        <Card.Text className="card__precio"  ><p>precio: ${item.precio}</p></Card.Text>
        <Button variant=""><Link className="card__verMas" to={`/detail/${item.id}`}> ver mas</Link></Button>
    </Card.Body>
    </Card>
            </div>
    )
    }
    
    export default ItemCard

