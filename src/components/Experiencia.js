import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { experiencia } from '../data/experiencia.js';

function Trabajo({ trabajo, id }) {
    const [abierto, setAbierto] = useState(false);
    const panelId = `proyectos-${id}`;

    return (
        <article className="border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl py-6 px-5 sm:px-7 flex flex-col gap-4 transition-colors">
            <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-gray-700 dark:text-gray-200 text-lg font-bold leading-snug">
                        {trabajo.puesto}
                    </h3>
                    <p className="text-indigo-500 dark:text-indigo-300 font-semibold text-sm sm:text-base">
                        {trabajo.empresa}
                    </p>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap sm:mt-1">
                    {trabajo.periodo}
                </span>
            </header>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                {trabajo.descripcion}
            </p>

            <ul className="flex flex-wrap gap-2" aria-label="Stack">
                {trabajo.stack.map((tecnologia) => (
                    <li
                        key={tecnologia}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-200"
                    >
                        {tecnologia}
                    </li>
                ))}
            </ul>

            <div>
                <button
                    type="button"
                    onClick={() => setAbierto(!abierto)}
                    aria-expanded={abierto}
                    aria-controls={panelId}
                    className="flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-200 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400"
                >
                    {abierto ? 'Ocultar proyectos' : `Ver proyectos (${trabajo.proyectos.length})`}
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`text-xs transition-transform duration-300 ${abierto ? 'rotate-180' : ''}`}
                    />
                </button>

                <div
                    id={panelId}
                    aria-hidden={!abierto}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${abierto ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                    <ul className="overflow-hidden flex flex-col gap-3 list-disc ml-5 text-sm sm:text-base text-slate-700 dark:text-gray-300">
                        {trabajo.proyectos.map((proyecto, i) => (
                            <li key={proyecto.nombre} className={i === 0 ? 'mt-4' : ''}>
                                <span className="font-semibold text-slate-700 dark:text-slate-200">
                                    {proyecto.nombre}:
                                </span>{' '}
                                {proyecto.descripcion}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
}

function Experiencia() {
    return (
        <section className="w-full">
            <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                <h2>Experiencia</h2>
                <div className="text-3xl">
                    <FontAwesomeIcon icon={faBriefcase} />
                </div>
            </header>
            <div className="flex flex-col gap-5">
                {experiencia.map((trabajo, i) => (
                    <Trabajo key={trabajo.empresa} trabajo={trabajo} id={i} />
                ))}
            </div>
        </section>
    );
}

export default Experiencia;
