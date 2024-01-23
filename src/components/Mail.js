import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopy } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react';



function Mail() {

    const inputRef = useRef('martin100395@gmail.com');

    const handleCopyToMail = () => {
        inputRef.current.select();
        document.execCommand('copy');
    }

    return (
        <section className="w-full">
            <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                <h2>Correo</h2>
                <FontAwesomeIcon icon={faEnvelope} />
            </header>
            <div className='flex gap-2'>
                <input disabled className="bg-black/5 dark:bg-white/5 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300" value='martin100395@gmail.com' ref={inputRef} />
                <div className='gap-2'>
                    <button className="flex bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2.5 px-4 rounded-lg" onClick={handleCopyToMail}>
                        <FontAwesomeIcon icon={faCopy} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Mail