# Martin Barrios — Portfolio

Portfolio personal de **Martin Barrios**, Analista Desarrollador Full Stack (.NET · Angular · Laravel) con más de 6 años de experiencia, en Catamarca, Argentina.

## Secciones

- **Encabezado:** presentación, estado de disponibilidad y descarga del CV.
- **Experiencia:** cada trabajo tiene su tarjeta con el puesto, la empresa, las fechas, el stack y una lista de proyectos que se puede desplegar.
- **Formación**
- **Habilidades:** agrupadas en Frontend, Backend, Bases de datos y Herramientas y metodologías.
- **Proyectos:** proyectos personales publicados en Netlify.
- **Sociales y Correo:** LinkedIn, GitHub y un botón para copiar el email.

Tiene modo claro/oscuro y se adapta a celular, tablet y escritorio.

## Tecnologías

- [React 18](https://react.dev/) con [Create React App](https://create-react-app.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) (modo oscuro por clase)
- [Font Awesome](https://fontawesome.com/) para los íconos de la interfaz

## Ejecutar en local

Requisitos: [Node.js](https://nodejs.org/) 18 o superior.

```bash
npm install
npm start
```

La página se abre en [http://localhost:3000](http://localhost:3000) y se recarga sola al guardar cambios.

| Comando | Qué hace |
|---|---|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de producción en la carpeta `build/` |
| `npm test` | Tests en modo watch |

## Editar el contenido

El contenido está separado de los componentes, así que para actualizarlo no hace falta tocar el HTML:

| Qué | Dónde |
|---|---|
| Trabajos y formación | `src/data/experiencia.js` |
| Habilidades (grupos e íconos) | `src/data/habilidades.js` |
| Encabezado (título, subtítulo, disponibilidad) | `src/components/Icono.js` |
| Proyectos | `src/components/Proyectos.js` |
| Redes sociales | `src/components/Sociales.js` |
| CV descargable | `public/Martin_Barrios.pdf` (reemplazar el archivo y mantener el nombre) |
| Título y descripción SEO | `public/index.html` |

Para agregar una habilidad, se suma el SVG en `src/img/`, se importa en `src/data/habilidades.js` y se agrega al grupo que corresponda. Si una habilidad no tiene ícono, se usa `texto` en lugar de `icono`.

## Estructura

```
public/            index.html, CV y archivos estáticos
src/
  components/      Una sección por componente
  data/            Contenido editable (experiencia, formación, habilidades)
  img/             Avatar e íconos SVG
  App.js           Orden de las secciones
```

## Publicación

1. Trabajar en una rama y abrir un pull request contra `main`.
2. Al hacer merge en `main`, el hosting conectado al repositorio publica los cambios automáticamente.
   - Comando de build: `npm run build`
   - Carpeta de salida: `build`

## Créditos

Los íconos de TypeScript, Angular, Angular Material, .NET Framework, SQL Server, PostgreSQL, Git y Azure DevOps son de [Devicon](https://devicon.dev/) (licencia MIT). Las marcas pertenecen a sus respectivos dueños.

## Contacto

- LinkedIn: [martin-barrios100395](https://www.linkedin.com/in/martin-barrios100395)
- GitHub: [stlaso](https://github.com/stlaso)
- Email: martin100395@gmail.com
