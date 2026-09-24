// Datos de la sección Habilidades.
// Si una habilidad no tiene `icono`, se muestra `texto` en su lugar.
import HtmlIcon from '../img/file-type-html.svg';
import CssIcon from '../img/file-type-css.svg';
import JsIcon from '../img/javascript-js.svg';
import TypeScriptIcon from '../img/typescript.svg';
import AngularIcon from '../img/angular.svg';
import AngularMaterialIcon from '../img/angular-material.svg';
import ReactIcon from '../img/react.svg';
import TailwindCssIcon from '../img/tailwind-css.svg';
import CSharpIcon from '../img/c-sharp-c.svg';
import NetFrameworkIcon from '../img/dotnet-framework.svg';
import NetCoreIcon from '../img/NET core.svg';
import PHPIcon from '../img/PHP.svg';
import LaravelIcon from '../img/laravel.svg';
import LivewireIcon from '../img/Livewire.svg';
import SqlServerIcon from '../img/sql-server.svg';
import PostgreSqlIcon from '../img/postgresql.svg';
import GitIcon from '../img/git.svg';
import AzureDevOpsIcon from '../img/azure-devops.svg';

export const habilidades = [
  {
    grupo: 'Frontend',
    items: [
      { nombre: 'HTML', icono: HtmlIcon },
      { nombre: 'CSS', icono: CssIcon },
      { nombre: 'JavaScript', icono: JsIcon },
      { nombre: 'TypeScript', icono: TypeScriptIcon },
      { nombre: 'Angular', icono: AngularIcon },
      { nombre: 'Angular Material', icono: AngularMaterialIcon },
      { nombre: 'React', icono: ReactIcon },
      { nombre: 'Tailwind CSS', icono: TailwindCssIcon },
    ],
  },
  {
    grupo: 'Backend',
    items: [
      { nombre: 'C#', icono: CSharpIcon },
      { nombre: '.NET Framework', icono: NetFrameworkIcon },
      { nombre: '.NET Core', icono: NetCoreIcon },
      { nombre: 'Web API', texto: 'API' },
      { nombre: 'WCF', texto: 'WCF' },
      { nombre: 'PHP', icono: PHPIcon },
      { nombre: 'Laravel', icono: LaravelIcon },
      { nombre: 'Livewire', icono: LivewireIcon },
    ],
  },
  {
    grupo: 'Bases de datos',
    items: [
      { nombre: 'SQL Server', icono: SqlServerIcon },
      { nombre: 'PostgreSQL', icono: PostgreSqlIcon },
    ],
  },
  {
    grupo: 'Herramientas y metodologías',
    items: [
      { nombre: 'Git', icono: GitIcon },
      { nombre: 'Azure DevOps', icono: AzureDevOpsIcon },
      { nombre: 'Scrum', texto: 'Scrum' },
    ],
  },
];
