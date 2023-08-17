import "./homestyle.scss"
import { Link } from "react-router-dom"



export const LandingPage = () => {
    return(
        <div className="home__body">
            <header className="home__header">
                <section className="header__texto">
                    <h2>Descubre el Mundo con GBviajes</h2>
                    <h3>Tu Compañero Global en Aventuras</h3>
                    <p>¿Listo para explorar los rincones más asombrosos de nuestro planeta? ¡Prepárate para una experiencia inolvidable de viaje con GBviajes! Nuestra aplicación está diseñada para hacer que tu aventura de viaje sea más emocionante, accesible y cómoda que nunca.</p>
                    <p>Viajar es una de las mejores formas de enriquecer tu vida con nuevas culturas, paisajes deslumbrantes y experiencias inolvidables. En GBviajes, entendemos tu pasión por descubrir el mundo, y es por eso que nos dedicamos a brindarte una forma simple y eficiente de reservar tus vuelos aéreos.</p>
                </section>
                <section className="header__img">
                    <img src="/public/airplane.png" alt="avion" />
                    <Link className="header__link" to = "/destinos">ir a destinos</Link>
                </section>
            </header>
            
            <div className="home__local">
            <section className="header__main1">
                    <h2>Descubre la Auténtica Argentina</h2>
                    <h3>Explora Destinos Increíbles con Vuelos Nacionales</h3>
                    <p>¡Listo para vivir la aventura en casa! De Tierra del Fuego a Jujuy y El Calafate, los vuelos nacionales te llevan a experiencias únicas. Descubre el fin del mundo, sumérgete en la cultura de Jujuy y maravíllate con los glaciares de El Calafate. ¡Tu país te espera para explorar! ¡Vuela alto y descubre Argentina!</p>
                    
                </section>
                <section className="header__img">
                    <img className="main__img" src="/public/argentina.png" alt="avion" />
                    <Link className="header__link" to = "/destinos/local">ir a vuelos locales</Link>
                </section>
            </div>
            <section className="home__international">
            <section className="header__main1">
                    <h2>Explora el Mundo</h2>
                    <h3>Descubre Destinos Asombrosos en tus Vuelos Internacionales</h3>
                    <p>¿Listo para despegar hacia lo desconocido? Prepárate para explorar destinos emocionantes en vuelos internacionales. Desde las playas paradisíacas de Búzios hasta la historia de Quito y el encanto de Cartagena, el mundo te espera.</p>
                    
                </section>
                <section className="header__img">
                    <img className="main__img" src="/public/international.png" alt="avion" />
                    <Link className="header__link" to = "/destinos/internacional">ir a vuelos internacionales</Link>
                </section>
                </section>
            
        </div> 
    )
}