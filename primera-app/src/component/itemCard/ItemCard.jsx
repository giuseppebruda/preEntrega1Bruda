import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ItemCard = ({item}) => {
    return(
        <div className="card__container">
            <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
        <Card.Title>{item.ciudad}</Card.Title>
        <Card.Text>
        {item.descripcion}
        </Card.Text>
        <Button variant="primary"><Link to={`/detail/${item.id}`}> ver mas</Link></Button>
    </Card.Body>
    </Card>
            </div>
    )
    }
    
    export default ItemCard

