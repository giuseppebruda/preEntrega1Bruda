import { Header } from './component/header/Header'
import { ItemListContainer } from './component/itemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
      <Header />
      <ItemListContainer saludo ="bienvenido"/>
    </div>
  )
}

export default App
