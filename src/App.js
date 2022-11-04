import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import ColorSchemesExample from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <ColorSchemesExample />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idcategoria" element={<ItemListContainer />} />
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
