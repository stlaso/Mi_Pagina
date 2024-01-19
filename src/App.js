import Icono from './components/Icono.js';
import Tema from './components/Tema.js'
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {
  return (
<>
    <Tema/>
    <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
        <main className='flex flex-col gap-16'>
          <Icono/>
        </main>
    </div>
    
</>
  );
}

export default App;
