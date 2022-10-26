import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import TextLinkExample from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ColorSchemesExample from './components/Navbar'
function App() {
  return (
    <div>
      <ColorSchemesExample />
      <ItemListContainer greeting={'Bienvenido'} />
      <TextLinkExample />
    </div>
  )
}

export default App
