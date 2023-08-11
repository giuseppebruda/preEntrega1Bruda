import { useContext, useState } from "react";
import { CarContext } from "../../context/CarContext";
import { collection, writeBatch, query, where, documentId,getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link, Navigate } from "react-router-dom"


const Checkout = () => {
    const { car,totalCompra,vaciarCarrito } = useContext(CarContext)
    const ordenRef = collection(db, "orders")
    const [orderId, setOrderId] =useState(null)
    const[values, setValues] = useState({
        nombre: "",
        direccion: "",
        email: ""
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value);

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("submit")
        console.log(values)
        
        const orden = {
            cliente: values,
            item: car.map(item =>({id: item.id, precio: item.precio, cantidad: item.cantidad, destino: item.ciudad})),
            total: totalCompra(),
            fyh: new Date()
        }
        console.log(orden)
        console.log(car.map(item=>item.id));

        const batch = writeBatch(db)
        const destinosRef = collection(db, "destinos")
        const q = query(destinosRef,where(documentId(), "in", car.map(item=>item.id)))

        const destinos = await getDocs(q)
        const outOfStock = []

        destinos.docs.forEach((doc)=>{
            const item = car.find(prod => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock>= item.cantidad){
                batch.update(doc.ref,{
                    stock: stock - item.cantidad
                })
            }else {
                outOfStock.push(item)
            }
        })

        if(outOfStock.length===0){
            batch.commit()
            const doc = await addDoc(ordenRef, orden)

            vaciarCarrito()
            setOrderId(doc.id)
        }else{
            alert("hay items sin stock")
        }

        
        // const ordenRef = collection(db, "orders")
        // addDoc(ordenRef, orden)
        // .then((doc) =>{
        //     console.log(doc.id)
        //     vaciarCarrito()
        //     setOrderId(doc.id)
        // })
        
    }
    if (orderId) {
        return (
            <div className="container my-5">
                <h2>tu compra se realizo con exito</h2>
                <hr />
                <p>tu numero de orden es: <strong>{orderId}</strong></p>
                <Link to={"/"}>volver</Link>
            </div>
        )
    }
    
    if (car.length === 0){
        return <Navigate to={"/destinos"}/>
    }
    
    return(
        <div>
            <h2>Checkout</h2>
            <hr />
            
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleInputChange}
                value={values.nombre}
                type="text"
                className="form-control my2"
                placeholder="Nombre"
                name="nombre"
                /> 

                <input 
                onChange={handleInputChange}
                value={values.direccion}
                type="text"
                className="form-control my2"
                placeholder="Direccion"
                name="direccion"
                />

                <input 
                onChange={handleInputChange}
                value={values.email}
                type="email"
                className="form-control my2"
                placeholder="tu email"
                name="email"
                /> 

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout