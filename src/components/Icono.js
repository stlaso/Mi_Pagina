import Avatar from "../img/avatar.jpg";


function Icono() {
  return (
    <section className='flex flex-col sm:flex-row items-center gap-5'>
        <div className='relative w-44 h-44 bg-indigo-100 dark:bg-gray-700/60 border-8 border-white dark:border-gray-900/80 shadow-lg rounded-full overflow-hidden'>
        <span
          className="absolute inset-0 flex items-center justify-center"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <img
            src={Avatar}
            alt="Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </span>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-3">
          <div className='flex flex-col items-left gap-2'>
            <h1 className="text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-600 dark:text-slate-100">Martin Barrios</h1>
            <p className="text-slate-700 text-sm sm:text-lg dark:text-slate-300 max-w-xl rounded-2xl">Mi pasion es la programacion</p>
          </div>
      
        <div className="flex gap-3"> 
          <button className="flex items-center text-sm gap-3 bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2 px-4 rounded-lg font-semibold">
            <div className="i-fa-pro:file-user text-xl sm:text-lg z-auto">
              Curriculum
            </div>
          </button>
        </div>
        </div>
    </section>
  )
}

export default Icono