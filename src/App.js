import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

const saludo = 'PROXIMAMENTE..... conoce el stock completo de productos de Nonni'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={saludo}/>
    </div>
  );
}
export default App;
