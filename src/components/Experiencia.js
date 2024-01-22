
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';


function Experciencia() {
    return (
        <section className="w-full">
            <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                <h2>Experciencia</h2>
                <div className="text-3xl">
                    <FontAwesomeIcon icon={faBriefcase} />
                </div>
            </header>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <div className='flex flex-col gap-1 '>
                            <h2 className='text-lg font-semibold text-slate-700 dark:text-slate-200'>Full stack </h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400"></p>
                        </div>
                        <ul className="list-disc flex flex-col gap-2 ml-5 text-slate-700 dark:text-gray-300 text-md">
                            <li>Administration Dashboard with React and NextJs for the management of patients, appointments, and services performed daily by a physiotherapy center.</li>
                            <li>Administration Dashboard with React and NextJs for the management of patients, appointments, and services performed daily by a physiotherapy center.</li>
                            <li>Administration Dashboard with React and NextJs for the management of patients, appointments, and services performed daily by a physiotherapy center.</li>
                        </ul>
                    </div>
                </div>

        </section>
    )
}

export default Experciencia