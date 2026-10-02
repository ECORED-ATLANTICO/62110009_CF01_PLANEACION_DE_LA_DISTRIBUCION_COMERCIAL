export default {
  global: {
    Name: 'Principios de la distribución comercial',
    Description:
      'El componente formativo Principios de la distribución comercial aborda los procesos relacionados con la planificación y gestión de la distribución de productos, incluyendo canales, intermediarios, logística y estrategias de comercialización. Analiza elementos como la selección de canales, acuerdos comerciales, con el propósito de optimizar la cobertura del mercado y garantizar la disponibilidad eficiente del producto.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Atributos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clasificación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Características',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Referencias',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Plan',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Sistemas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Utilidades',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Canales de distribución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Características',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Estructura',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Métodos de selección',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Intermediarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Clases',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Acuerdos comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Funciones',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Formatos comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Clasificación',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/62110009_CF01_CFA.pdf',
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
  glosario: [
    {
      termino: 'Acuerdos comerciales',
      significado:
        'Convenios entre empresas o actores del canal para regular condiciones de venta y distribución.',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'Proceso de guardar y conservar productos en condiciones adecuadas hasta su distribución.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'Red de procesos y actores que intervienen en la producción y distribución de bienes.',
    },
    {
      termino: 'Canales de distribución',
      significado:
        'Conjunto de intermediarios que llevan el producto desde el productor hasta el consumidor final.',
    },
    {
      termino: 'Cobertura de mercado',
      significado:
        'Nivel de alcance que tiene un producto dentro de un mercado determinado.',
    },
    {
      termino: 'Distribución',
      significado:
        'Proceso de traslado de productos desde su origen hasta el cliente final.',
    },
    {
      termino: 'Distribución exclusiva',
      significado:
        'Estrategia donde el producto se comercializa a través de pocos intermediarios autorizados.',
    },
    {
      termino: 'Distribución intensiva',
      significado:
        'Estrategia que busca máxima cobertura colocando el producto en muchos puntos de venta.',
    },
    {
      termino: 'Distribución selectiva',
      significado:
        'Estrategia que utiliza un número limitado de intermediarios para comercializar el producto.',
    },
    {
      termino: 'Intermediarios',
      significado:
        'Actores que facilitan la comercialización entre productor y consumidor.',
    },
    {
      termino: 'Inventario',
      significado:
        'Conjunto de productos disponibles para la venta o almacenamiento.',
    },
    {
      termino: 'Logística',
      significado:
        'Gestión del flujo de productos desde el origen hasta el consumidor.',
    },
    {
      termino: 'Mayorista',
      significado:
        'Intermediario que compra grandes volúmenes para venderlos a minoristas o distribuidores.',
    },
    {
      termino: 'Minorista',
      significado:
        'Intermediario que vende productos directamente al consumidor final.',
    },
    {
      termino: 'Sistemas de distribución',
      significado:
        'Modelos que definen cómo se gestionan los canales de distribución.',
    },
    {
      termino: 'Stock',
      significado: 'Cantidad de productos disponibles para atender la demanda.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ballou, R. H. (2004). Logística: administración de la cadena de suministro (5.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Christopher, M. (2016). Logística y gestión de la cadena de suministro (5.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Chopra, S., & Meindl, P. (2013). Administración de la cadena de suministro: Estrategia, planeación y operación (5.ª ed.). Pearson Educación.',
      link: 'https://gc.scalahed.com/recursos/files/r161r/w24567w/Sunil_Chopral.pdf',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). Fundamentos de marketing (13.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). Dirección de marketing (15.ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Levy, M., & Weitz, B. (2012). Administración de ventas al detal (retail) (8.ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Mora García, L. A. (2016). Gestión logística integral. Ecoe Ediciones.',
    },
    {
      referencia:
        'Rushton, A., Croucher, P., & Baker, P. (2017). Manual de logística y gestión de la distribución (6.ª ed.). Kogan Page.',
    },
    {
      referencia:
        'Simchi-Levi, D., Kaminsky, P., & Simchi-Levi, E. (2008). Diseño y gestión de la cadena de suministro. McGraw-Hill.',
    },
    {
      referencia:
        'Soret, I. (2013). Logística comercial y empresarial. ESIC Editorial.',
    },
    {
      referencia:
        'WWF Sustainable Consumption Platform. (2022). Guía de abastecimiento sostenible. WWF‑SCP.',
      link: 'https://www.wwf-scp.org/wp-content/uploads/2022/09/Guia-de-abastecimiento-sostenible_B14S_C5_web.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolas Cruz',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Rosmery Conde',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
