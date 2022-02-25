
import './App.css';
import Contador from './components/Contador';
import Eventos from './components/Eventos';
import Parrafo from './components/Parrafo';
import Variables from './components/Variables';
import Listas from './components/Listas';

function App() {
  return (
    <div className="App">
        <Parrafo/>
        <Variables/>
        <Eventos/>
        <Contador/>
        <Listas/>
    </div>
  );
}

export default App;
