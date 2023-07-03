import "./itemListStyle.scss"

export const ItemListContainer = ({saludo}) => {
    return(
        <div className="container">
            <h1>¿estas listo para el viaje de tu vida ?</h1>
            <p>{saludo}</p>
        </div> 
    )
}