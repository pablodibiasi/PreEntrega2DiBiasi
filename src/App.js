import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer'

import ItemListContainer from './components/ItemListContainer'
import ColorSchemesExample from './components/Navbar'
function App() {
  return (
    <div>
      <ColorSchemesExample />
      <ItemListContainer />
      <Footer />
    </div>
  )
}

export default App
