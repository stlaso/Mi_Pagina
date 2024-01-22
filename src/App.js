import Proyectos from './components/Proyectos.js';
import Experciencia from './components/Experiencia.js';
import Icono from './components/Icono.js';
import Tema from './components/Tema.js'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Habilidades from './components/Habilidades.js';

function App() {
  return (
<>
    <Tema/>
    <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
        <main className='flex flex-col gap-16'>
          <Icono/>
          <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md"></hr>
          <Experciencia/>
          <Proyectos/>
          <Habilidades/>
        </main>
    </div>
    
</>
  );
}

export default App;
