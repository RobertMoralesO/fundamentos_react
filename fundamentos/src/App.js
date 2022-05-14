import logo from './logo.svg';
import Parrafo from './components/Parrafo';
import Variables from './components/Variables';
import Contador from './components/Contador';
import Eventos from './components/Eventos';
import Listas from './components/Listas';
import PeticionApi from './components/PeticionApi';
import Formulario from './components/Formulario';
import './App.css';
import PruebaPropiedades from './components/PruebaPropiedades';

function App() {
  return (
  <>
      
      <Contador valor_inicial={50}/>
      {// <PruebaPropiedades  titulo = 'Esto es un título'/>
      }
  </>
  );
}

export default App;
