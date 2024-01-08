import Menu from './components/Menu.js'
import Inicio from './components/Inicio.js';
import Info from './components/Info.js'

function App() {
  return (
<>
    <Menu/>
    <div className="fondo">
        <Inicio />
        <Info />
    </div>
    
</>
  );
}

export default App;
