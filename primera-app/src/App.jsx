import { Header } from './component/header/Header' 
import { LandingPage } from './component/home/LandingPage'
import ItemDetailContainer from './component/itemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './component/itemListContainer/ItemListContainer'
import { Nosotros } from './component/nosotros/Nosotros'
import { Promociones } from './component/promociones/promociones' 
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/destinos/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/destinos' element={<ItemListContainer/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/promociones' element={<Promociones/>}/>
        <Route path='*' element={ <Navigate to="/"/> } />
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
