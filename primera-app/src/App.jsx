import { Header } from './component/header/Header' 
import { LandingPage } from './component/home/LandingPage'
import ItemDetailContainer from './component/itemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './component/itemListContainer/ItemListContainer'
import Contacto from './component/contacto/Contacto'
import { Promociones } from './component/promociones/promociones' 
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CarContext, CarProvider } from './context/CarContext'
import CarView from './component/carview/carview'


function App() {



  
  return (
    <CarProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/destinos/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/destinos' element={<ItemListContainer/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/promociones' element={<Promociones/>}/>
        <Route path='/car' element={<CarView/>}/>
        <Route path='*' element={ <Navigate to="/"/> } />
      </Routes>
    </BrowserRouter>
    </CarProvider>
  )
}

export default App
