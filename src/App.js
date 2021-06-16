import './App.css';
import {NavBar} from './components/NavBar/NavBar'

function App() {
  const handleClick = () => alert ('muy bien!')

  return (
    <div className="App">
      <h1>Hola!</h1>
      <button onClick= {handleClick}>Haceme click!</button>
      <NavBar/>
    </div>
  );
}
export default App;
