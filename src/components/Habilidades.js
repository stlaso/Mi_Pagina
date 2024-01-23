import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import TailwindCssIcon from '../img/tailwind-css.svg';
import HtmlIcon from '../img/file-type-html.svg';
import CssIcon from '../img/file-type-css.svg';
import JsIcon from '../img/javascript-js.svg';
import LivewireIcon from '../img/Livewire.svg';
import LaravelIcon from '../img/laravel.svg';
import NetIcon from '../img/NET core.svg';
import CSharpIcon from '../img/c-sharp-c.svg';
import PHPIcon from '../img/PHP.svg';
import '../index.css'

function Habilidades() {
    return (
        <section className="w-full">
            <header className='class="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3"'>
                <h2>Habilidades </h2>
                <div className="px-4 text-3xl">
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </header>
            <div className="flex flex-col gap-10">
                <div className="flex gap-5">
                    <img src={HtmlIcon} alt="HTML Icon" className="w-48 h-16 "  />
                    <img src={CssIcon} alt=" CSS Icon" className="w-48 h-16" />
                    <img src={JsIcon} alt=" JS Icon" className="w-48 h-16"  />
                </div>
                <div className="flex gap-5">
                <img src={TailwindCssIcon} alt=" Tailwindcss Icon" className="w-48 h-16"  />
                <img src={PHPIcon} alt=" PHP Icon" className="w-48 h-16"  />
                <img src={LaravelIcon} alt=" Laravel Icon" className="w-48 h-16"  />

                </div>


                <div className="flex gap-5">
                <img src={LivewireIcon} alt=" Livewire Icon" className="w-48 h-16"  />
                <img src={CSharpIcon} alt=" C# Icon" className="w-48 h-16"  />
                <img src={NetIcon} alt=" .Net core Icon" className="w-48 h-16"  />
                </div>
            </div>
        </section>
    )
}

export default Habilidades