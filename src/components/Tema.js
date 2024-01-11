import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Tema() {
  return (
    <div className="mx-auto max-w-3xl sticky top-0 z-10">
      <header className="-full bottom-0 static flex justify-end items-center py-1 px-5 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg">
        <button className='py-4 px-2 sm:py-5 flex items-center gap-4 outline-none'>
          <FontAwesomeIcon icon={faMoon} className="text-2xl dark:hidden text-slate-700" />
        </button>
      </header>
    </div>
  );
}

export default Tema;