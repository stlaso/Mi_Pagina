import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt  } from '@fortawesome/free-solid-svg-icons';
import Linkedin from '../img/linkedin.svg'
import Github from '../img/github.svg'



function Sociales()
{
    return(
        <section className="w-full">
            <header className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                <h2>Sociales</h2>
                <FontAwesomeIcon icon={faAt}/>
            </header>
            <div className='flex flex-wrap gap-3'>
                <a target="_blank" rel="noreferrer"  href='https://www.linkedin.com/in/martin-barrios100395' className="flex items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-social-link dark:shadow-social-link-dark hover:shadow-social-link-hover dark:hover:shadow-social-link-hover-dark transition-shadow text-sky-600 border border-gray-600">
                <img src={Linkedin} alt=" Linkedin" className="w-8 h-8"  />
                Linkedin
                </a>
                <a  target="_blank" rel="noreferrer"  href='https://github.com/stlaso' className='flex items-center gap-3 font-bold px-4 h-16 rounded-xl shadow-social-link dark:shadow-social-link-dark hover:shadow-social-link-hover dark:hover:shadow-social-link-hover-dark transition-shadow text-black/80 dark:text-white/80 border border-gray-600'>
                <img src={Github} alt=" GITHUB" className="w-8 h-8"  />
                Github
                </a>
            </div>
        </section>
    )
}

export default Sociales