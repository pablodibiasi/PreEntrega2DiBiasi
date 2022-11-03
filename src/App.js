import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ColorSchemesExample from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}
        <ColorSchemesExample />

        {/* ACA DECLARO RUTAS PUNTUALES */}
        <Routes>
          {/* <Route path="/" element={<ItemListContainer />} /> */}

          <Route path="/" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      {/* PONGO COMPONENTES QUE QUIERO QUE ESTEN EN TODAS LAS RUTAS */}

      <Footer />
    </div>
  )
}

export default App
