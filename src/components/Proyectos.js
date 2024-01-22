
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Proyectos()
{
    return( 
        <section className="w-full">
            <header className='class="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3"'>
                <h2>Proyectos </h2>
                <div className="px-4 text-3xl">
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </header>
        </section>
    )
}
export default Proyectos