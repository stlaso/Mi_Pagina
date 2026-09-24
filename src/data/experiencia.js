// Datos de las secciones Experiencia y Formación.
// Para editar el contenido del portfolio alcanza con modificar este archivo.

export const experiencia = [
  {
    puesto: 'Analista de Desarrollo de Software (Semi Senior)',
    empresa: 'Crédito Argentino',
    periodo: '2024 – 2026',
    stack: [
      'C#',
      '.NET Framework / .NET Core',
      'WCF',
      'Web API',
      'Angular',
      'Angular Material',
      'SQL Server',
      'Azure DevOps (Repos / Boards)',
      'Scrum',
    ],
    descripcion:
      'Desarrollo y mantenimiento de los sistemas de gestión comercial y crediticia de una entidad financiera con alcance nacional, utilizados por más de 100 sucursales en todo el país y por clientes de todas las provincias. Estos sistemas cubren el ciclo completo de una solicitud de crédito: alta de clientes y comercios, evaluación de riesgo, aprobación y seguimiento comercial.',
    proyectos: [
      {
        nombre: 'Presupuestador',
        descripcion:
          'sistema de generación y gestión de presupuestos de crédito en formato físico y digital. Incluye búsqueda y registro de solicitantes y administración de la documentación respaldatoria.',
      },
      {
        nombre: 'Evaluación de riesgo 360°',
        descripcion:
          'módulo que consolida información de personas y entidades para determinar su nivel de riesgo crediticio y dar soporte a la toma de decisiones sobre las solicitudes.',
      },
      {
        nombre: 'Agenda de presupuestos',
        descripcion:
          'bandeja de trabajo para analistas con búsqueda por múltiples criterios (estado, dictamen, nivel de riesgo, entre otros) y flujo de aprobación o rechazo de solicitudes.',
      },
      {
        nombre: 'ABM de comercios',
        descripcion:
          'gestión integral de datos de personas y comercios adheridos, con visualización de presupuestos disponibles e indicadores para la toma de decisiones comerciales.',
      },
      {
        nombre: 'Alta de comercios',
        descripcion:
          'portal de registro y edición de comercios adheridos, con estadísticas de actividad por comercio.',
      },
      {
        nombre: 'Gestión de campañas',
        descripcion:
          'plataforma para crear y ejecutar campañas de comunicación por mensajería y correo electrónico, con reportes estadísticos de resultados.',
      },
      {
        nombre: 'Gestión de metas comerciales',
        descripcion:
          'sistema de planificación y seguimiento de objetivos de venta para más de 100 sucursales en todo el país. Permite asignar metas mensuales de forma automática o manual para distintos indicadores: colocación de préstamos digitales y físicos, generación de rendimiento, entre otros. Además mantiene el historial por sucursal para medir el desempeño y comparar períodos.',
      },
    ],
  },
  {
    puesto: 'Desarrollador Web Full Stack',
    empresa: 'Municipalidad de San Fernando del Valle de Catamarca',
    periodo: '2021 – 2024',
    stack: ['PHP', 'Laravel', 'Tailwind CSS', 'PostgreSQL'],
    descripcion:
      'Desarrollo de sistemas internos y de atención al ciudadano para distintas áreas del municipio.',
    proyectos: [
      {
        nombre: 'Zoonosis, turnos online',
        descripcion:
          'sistema de asignación de turnos para que los ciudadanos reserven la castración de sus mascotas.',
      },
      {
        nombre: 'Taller de mantenimiento',
        descripcion:
          'gestión de turnos para reparación de equipos electrónicos municipales. Controla el stock de herramientas y materiales , y asigna tareas a los técnicos de forma automatizada para optimizar los tiempos de atención.',
      },
      {
        nombre: 'Indumentaria',
        descripcion:
          'control de stock de ropa de trabajo y herramientas, con registro de entregas por empleado y por área.',
      },
      {
        nombre: 'Caja de Crédito municipal',
        descripcion:
          'gestión de créditos, pagos y presupuestos de la Caja de Crédito de la Municipalidad.',
      },
      {
        nombre: 'Control de asistencia',
        descripcion: 'registro del ingreso físico del personal al edificio del Nodo.',
      },
    ],
  },
];

// Los campos vacíos no se muestran en la página.
export const formacion = [
  {
    titulo: 'Curso de Desarrollo Web Full Stack',
    institucion: 'Extrados',
    periodo: '',
  },
  {
    titulo: '', // TODO: completar nombre de la carrera / título
    institucion: 'Instituto Superior San Martín',
    periodo: '', // TODO: completar años
  },
];
