import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { formacion } from '../data/experiencia.js';

function Formacion() {
    return (
        <section className="w-full">
            <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                <h2>Formación</h2>
                <div className="text-3xl">
                    <FontAwesomeIcon icon={faGraduationCap} />
                </div>
            </header>
            <div className="flex flex-col gap-3">
                {formacion.map((estudio) => (
                    <article
                        key={estudio.institucion}
                        className="border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl py-4 px-5 sm:px-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 transition-colors"
                    >
                        <div className="flex flex-col gap-0.5">
                            {estudio.titulo && (
                                <h3 className="text-gray-700 dark:text-gray-200 font-bold">
                                    {estudio.titulo}
                                </h3>
                            )}
                            <p className={estudio.titulo
                                ? 'text-indigo-500 dark:text-indigo-300 font-semibold text-sm'
                                : 'text-gray-700 dark:text-gray-200 font-bold'}>
                                {estudio.institucion}
                            </p>
                        </div>
                        {estudio.periodo && (
                            <span className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                {estudio.periodo}
                            </span>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Formacion;
