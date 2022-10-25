import './App.css'
import ColorSchemesExample from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import TextLinkExample from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
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
