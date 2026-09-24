import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { habilidades } from '../data/habilidades.js';
import '../index.css'

function Habilidades() {

    const [animationPlayed, setAnimationPlayed] = useState(false);

    const handleAnimationEnd = () => {
        setAnimationPlayed(true);
    };

    const iconosStyle = {
        animation: animationPlayed ? 'none' : 'iconos 2s forwards',
    };

    return (
        <section className="w-full">
            <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                <h2>Habilidades</h2>
                <div className="text-3xl">
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </header>
            <div className="flex flex-col gap-8">
                {habilidades.map(({ grupo, items }) => (
                    <div key={grupo} className="flex flex-col gap-4">
                        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                            {grupo}
                        </h3>
                        <ul className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-6">
                            {items.map((item) => (
                                <li key={item.nombre} className="flex flex-col items-center gap-2 text-center">
                                    {item.icono ? (
                                        <img
                                            src={item.icono}
                                            alt=""
                                            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                                            style={iconosStyle}
                                            onAnimationEnd={handleAnimationEnd}
                                        />
                                    ) : (
                                        <span
                                            aria-hidden="true"
                                            className="w-12 h-12 sm:w-14 sm:h-14 grid place-items-center rounded-xl bg-indigo-100 text-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-200 text-xs sm:text-sm font-bold"
                                            style={iconosStyle}
                                        >
                                            {item.texto}
                                        </span>
                                    )}
                                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-tight">
                                        {item.nombre}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Habilidades
