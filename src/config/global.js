export default {
  global: {
    componenteFormativo: 'Identificación de peligros',
    descripcionCurso:
      'La identificación de peligros y valoración de riesgos permite realizar medidas de control, a fin de garantizar la seguridad y la salud de los trabajadores; se puede decir entonces que el objetivo de esta valoración es disminuir los riesgos a los cuales se encuentran expuestos los trabajadores de las empresas, evitando así accidentes y enfermedades laborales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Identificación de peligros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Acto inseguro',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Condición insegura',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Consecuencia',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Procesos productivos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Peligro',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Clasificación, consecuencias y normatividad asociada',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Medidas de control',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Beker, V. y Mochon, F. (2000). Elementos de micro y macroeconomía. McGraw-Hill. ',
      link: '',
    },
    {
      referencia:
        'Fundación MAPFRE Guanarteme. (s. f.). Centro de Documentación. Fundación MAPFRE.',
      link:
        'https://app.mapfre.com/documentacion/publico/i18n/consulta/registro.cmd?id=15195 ',
    },
    {
      referencia:
        'ICONTEC. (1994). Electrotecnia. Principios de ergonomía visual. Iluminación para ambientes de trabajo en espacios cerrados [GTC-8].',
      link:
        'https://www.academia.edu/40868915/GU%C3%8DA_T%C3%89CNICA_GTC_COLOMBIANA_8',
    },
    {
      referencia:
        'ICONTEC Internacional. (2012). Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional [GTC-45]',
      link: 'https://www.academia.edu/16609037/GTC45',
    },
    {
      referencia:
        'Ley 9 de 1979. Por la cual se dictan Medidas Sanitarias. Enero 24 de 1979. D.O. No. 35.308',
      link:
        'https://www.redjurista.com/Documents/codigo_sanitario_nacional_-_ley_9_de_1979.aspx#/ ',
    },
    {
      referencia:
        'LosRecursosHumanos.com. (2015). Ramas de la Higiene Industrial.',
      link:
        'https://www.losrecursoshumanos.com/ramas-de-la-higiene-industrial/ ',
    },
    {
      referencia:
        'Prado, J. (2020). ¿Qué es la higiene industrial y cuáles son sus principales ramas? IMF Blog de PRL.',
      link:
        'https://blogs.imf-formacion.com/blog/prevencion-riesgos-laborales/especial-master-prevencion/que-es-higiene-industrial-principales-ramas/',
    },
    {
      referencia: 'Prevencionar.com. (2020). Historia de la Higiene Industrial',
      link:
        'https://prevencionar.com/2020/04/09/historia-de-la-higiene-industrial/',
    },
    {
      referencia:
        'Resolución 2400 de 1979. [Ministerio de Trabajo y Seguridad Social]. Por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo. Mayo 22 de 1979.',
      link:
        'http://www.bogotajuridica.gov.co/sisjur/normas/Norma1.jsp?i=53565 ',
    },
    {
      referencia:
        'Resolución 90708 de 2013. [Ministerio de Minas y Energía]. Por la cual se expide el Reglamento Técnico de Instalaciones Eléctricas –RETIE. Agosto 30 de 2013.',
      link:
        'http://www.einceltda.com/docs/ANEXO%20RES%2090708%20DEL%2030%20DE%20AGOSTO%20%202013%20RETIE.pdf',
    },
    {
      referencia:
        'Resolución 40122 de 2016. [Ministerio de Minas y Energía]. Por la cual se adiciona y se modifica el Reglamento Técnico de Iluminación y Alumbrado Público -RETILAP. Febrero 8 de 2016.',
      link:
        'https://www.sic.gov.co/sites/default/files/files/reglamentos%20tecnicos/40122%20de%202016.pdf',
    },
    {
      referencia:
        'Robledo, F. (2013). Seguridad y salud en el trabajo: Conceptos básicos. Ecoe Ediciones',
      link: '',
    },
    {
      referencia:
        'UOC X. (2016). ¿Sabes de dónde proviene la higiene industrial? Blog de Logística.',
      link:
        'https://blogs.x.uoc.edu/logistica/sabes-de-donde-proviene-la-higiene-industrial/  ',
    },
    {
      referencia:
        'World Health Organization [WHO]. (2013). La higiene ocupacional en América Latina: Una guía para su desarrollo',
      link:
        'https://www.who.int/occupational_health/publications/amrhigiene/es/. https://www.who.int/occupational_health/publications/amrhigiene/es/',
    },
    {
      referencia:
        'Zúñiga, A. (2003). Seguridad e higiene industrial. Editorial Limusa',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Calor',
      significado:
        'energía que se transfiere entre dos sistemas, con una característica en sus temperaturas. Las unidades de calor más usadas son kilocaloría y BTU.',
    },
    {
      termino: 'Conducción',
      significado:
        'fenómeno presentado cuando la transferencia de energía se hace a través de un contacto físico (sólidos o fluidos), los cuales tienen diferencia en sus temperaturas. ',
    },
    {
      termino: 'Convección',
      significado:
        'fenómeno presentado cuando la transferencia de energía se hace por fluidos en movimiento, relacionando piel y ambiente.',
    },
    {
      termino: 'Evaporación',
      significado:
        'fenómeno que se presenta cuando el líquido se convierte en vapor, teniendo en cuenta el aporte de cantidad de calor expresado por el cuerpo humano.',
    },
    {
      termino: 'Flujo luminoso',
      significado:
        'potencia propia de la fuente, la cual indica cuál es la cantidad de luz que emite una fuente, y tiene por unidad de medida lm (Lumen).',
    },
    {
      termino: 'Iluminancia',
      significado:
        'es el nivel de luz, dado en lúmenes, distribuidos por el área de la superficie a la que llega la luz, se expresa en LUX o en bujía-pie.',
    },
    {
      termino: 'Lux',
      significado:
        'unidad de medida que expresa los niveles de iluminación. 1 lux = 0.09729 bujía-pie.',
    },
    {
      termino: 'NFPA',
      significado: '<em>National Fire Protection Association.</em>',
    },
    {
      termino: 'TBS',
      significado: 'Temperatura ambiente o Bulbo Seco.',
    },
    {
      termino: 'TBH',
      significado: 'Temperatura de Bulbo Húmedo.',
    },
    {
      termino: 'Temperatura',
      significado:
        'estado en el que se encuentra la energía interna de un cuerpo.',
    },
    {
      termino: 'TG',
      significado: 'Temperatura de Globo.',
    },
    {
      termino: 'WBGT',
      significado: 'índice de temperatura de globo y bulbo húmedo.',
    },
  ],
  complementario: [
    {
      tema: 'Peligros físicos',
      referencia: 'Muñoz, F. (2017). Riesgos físicos napo [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mkLph-rYPlk&t=100',
    },
    {
      tema: 'Peligros eléctricos',
      referencia: 'SG-SST. (2021). Napo - Riesgo Eléctrico [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=20yyyBAq1Q8&t=86s ',
    },
    {
      tema: 'Condiciones inseguras',
      referencia:
        'Becerra, J. (2018). Napo Condiciones de Seguridad [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sQOlUn4c4rE&t=42s',
    },
    {
      tema: 'Trabajo repetitivo de evaluación de riesgos ',
      referencia: 'NAPO. (2018). Risk-assess repetitive work.  ',
      tipo: 'Página web',
      link:
        'https://www.napofilm.net/en/learning-with-napo/napo-in-the-workplace/risk-assess-repetitive-work ',
    },
    {
      tema: 'Prevención de vibración manos y brazos ',
      referencia: 'NAPO. (2017). Prevent hand-arm vibration.',
      tipo: 'Página web',
      link:
        'https://www.napofilm.net/en/learning-with-napo/napo-in-the-workplace/prevent-hand-arm-vibration ',
    },
    {
      tema: 'Napo en peligro: ¡químicos!',
      referencia: 'NAPO. (2009). Napo in... danger: chemicals!',
      tipo: 'Página web',
      link: 'https://www.napofilm.net/en/napos-films/napo-danger-chemicals ',
    },
    {
      tema: 'Normatividad de condiciones ambientales ',
      referencia:
        'Resolución 2400 de 1979. [Ministerio de Trabajo y Seguridad Social]. Por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo. Mayo 22 de 1979. ',
      tipo: 'Otro',
      link:
        'https://minvivienda.gov.co/sites/default/files/normativa/2400%20-%201979.pdf ',
    },
    {
      tema: 'Guía Técnica Colombiana GTC-45 ',
      referencia:
        'Ministerio de Salud y Protección Social. (2021). Guía para la identificación de peligros, valoración de riesgos y determinación de controles.',
      tipo: 'Otro',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHG01.pdf ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del Equipo de Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Manosalva Sandoval',
        cargo: 'Experta Temática ',
        centro:
          'Centro de Tecnologías del Transporte - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Alexandra Orejarena Barrios ',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Álix Cecilia Chinchilla Rueda ',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González ',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
