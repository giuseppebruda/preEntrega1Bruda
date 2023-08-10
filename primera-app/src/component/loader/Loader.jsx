import Spinner from 'react-bootstrap/Spinner'
import "./loader.scss"

const Loader = () => {

    return(
        <div className='loader'>
            <Spinner animation="border" variant="secondary" />
        </div>
    )
}

export default Loader

