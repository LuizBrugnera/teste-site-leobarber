import './App.css';
import { Banner } from './components/Banner/Banner';
import { Button } from './components/Button/Button';
import { Calendario } from './components/Calendario/Calendario';
import { Agendar } from './components/Form/Form';
import { Lista } from './components/Lista/Lista';

function App() {
  return (
    <div className="App">
        <Banner/>
        
        <h1>Agendamento</h1>

          <Calendario/>

        

    </div>
  );
}

export default App;
