import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Avatar from "../img/avatar.jpg";
import { faSun } from '@fortawesome/free-solid-svg-icons';

function Tema() {

  const [modoOscuro, setModoOscuro] = useState(false);
  
  const [mostrarIconoScroll, setMostrarIconoScroll] = useState(false);
 
  const [scrolleando, setScrolleando] = useState(false);

  const alternarModoOscuro = () => {
    setModoOscuro((modoOscuro) => !modoOscuro);
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setMostrarIconoScroll(scrollPosition > 180);
      setScrolleando(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className="mx-auto max-w-3xl sticky top-0 z-10">
      <header className="-full bottom-0 static flex items-center py-1 px-5 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg">
        {mostrarIconoScroll && (
          <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 bg-indigo-100 dark:bg-gray-700/60 border-2 border-white dark:border-gray-900/80 shadow-lg rounded-full overflow-hidden">
            <span
              className="absolute inset-0 flex items-center justify-center"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <img src={Avatar} alt="Avatar" className="w-full h-full object-cover rounded-full"/>
            </span>
          </div>
          <p className="text-2xl sm:text-3xl text-center sm:text-left font-bold text-slate-600 dark:text-slate-100">Martin Barrios</p>
        </div>
        )}
        <button className='py-4 px-2 sm:py-5 flex items-center gap-4 outline-none ml-auto' onClick={alternarModoOscuro}>
          <FontAwesomeIcon icon={modoOscuro ? faSun :  faMoon } className={`text-2xl hidden ${modoOscuro ? 'dark:block text-slate-100' : 'text-gray-600'}`} />
        </button>
      </header>
    </div>
  );
}

export default Tema;
