<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Distribución



    .bloque-texto-g.bg-color-01.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La distribución es un componente estratégico del sistema comercial que permite conectar la producción con el consumo. Su gestión implica decisiones relacionadas con canales, cobertura, logística y disponibilidad del producto. En entornos multicanal, su alcance trasciende lo físico e integra procesos digitales. Su correcta aplicación incide directamente en la competitividad y en la experiencia del cliente.


    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") La distribución se define como el conjunto de actividades orientadas a trasladar productos desde el productor hasta el consumidor final, garantizando disponibilidad, accesibilidad y condiciones adecuadas. Este proceso integra funciones logísticas, comerciales y operativas como transporte, almacenamiento, gestión de inventarios y coordinación de intermediarios.
        
        .bg-fondo-05.br-15.mb-3.p-4
          p.mb-0 Desde el enfoque de mercadeo, la distribución corresponde a la variable “plaza” dentro del marketing mix y cumple la función de facilitar el acceso del cliente al producto en el lugar y momento adecuados. Su gestión requiere alineación con el segmento de mercado, el tipo de producto y la estrategia comercial de la organización.

        p.mb-0 En la práctica, empresas como Amazon han optimizado la distribución mediante centros logísticos automatizados, entregas en 24 horas y sistemas de última milla, mientras que Coca-Cola mantiene una red global de distribución intensiva que garantiza presencia en tiendas, supermercados y máquinas dispensadoras.


    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Tipos


    .row.align-items-center.mb-5.justify-content-center
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img04.svg").mx-auto
      .col-lg
        p.mb-2 Los tipos de distribución corresponden a las estrategias utilizadas por las organizaciones para definir el nivel de cobertura del mercado y el número de intermediarios que participarán en la comercialización de un producto. 

        p.mb-0 La selección del tipo de distribución depende de factores como las características del producto, el mercado objetivo, el posicionamiento de la marca y los objetivos comerciales. Los principales tipos de distribución son:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img05.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Intensiva
            p.mb-0 Busca alcanzar la mayor cobertura posible del mercado mediante la presencia del producto en múltiples puntos de venta. Se utiliza principalmente para productos de consumo masivo que requieren alta disponibilidad, como bebidas, alimentos y artículos de uso cotidiano.

      .col-xl-4.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img06.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Selectiva
            p.mb-0 Emplea un número limitado de intermediarios, permitiendo mantener un mayor control sobre la comercialización y la experiencia del cliente. Es común en productos de gama media, como electrodomésticos, muebles y equipos tecnológicos.

      .col-xl-4.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img07.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Exclusiva
            p.mb-0 Estrategia que concede a uno o pocos intermediarios autorizados el derecho de comercializar un producto dentro de un territorio determinado, favoreciendo mayor control sobre su venta y posicionamiento. Como, por ejemplo, una marca de lujo comercializada únicamente mediante <em>boutiques</em> y distribuidores oficialmente autorizados.

             
    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .row.align-items-center.bg-fondo-07.p-4
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
          .col-lg
            p.mb-0 En el contexto real, Coca-Cola aplica distribución intensiva asegurando disponibilidad en tiendas de barrio, supermercados y restaurantes. Nike utiliza distribución selectiva combinando tiendas propias, distribuidores autorizados y comercio electrónico. Apple implementa distribución exclusiva mediante Apple Store y distribuidores certificados para controlar la experiencia del cliente y el posicionamiento de marca.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Plan
 
    .bg-full-width.bg-fondo-02.px-5.py-4
      img(src="@/assets/curso/tema2/img09.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text El plan es un instrumento estratégico que organiza las decisiones relacionadas con la entrega del producto al mercado. Incluye la definición de canales, cobertura geográfica, rutas logísticas, niveles de inventario y tiempos de entrega. Este plan permite coordinar recursos y procesos para garantizar eficiencia operativa y cumplimiento de los objetivos comerciales. Su estructura debe considerar variables como demanda, capacidad logística, costos y características del producto. 


    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img10.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") En empresas como Alpina, el plan de distribución incorpora cadena de frío, rutas de transporte especializadas y frecuencia de abastecimiento en puntos de venta. De igual manera, Mercado Libre diseña planes de distribución que integran centros de fulfillment, operadores logísticos y entregas de última milla para asegurar tiempos competitivos.
        .bg-fondo-05.br-15.mb-0.p-4
          p.mb-0 Este tema será abordado con mayor profundidad en secciones posteriores del componente formativo, donde se analizarán sus elementos y aplicación. Su desarrollo permitirá comprender su importancia dentro de la gestión de la distribución comercial.


    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Sistemas


    .row.align-items-center.mb-5.justify-content-center
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema2/img11.svg").mx-auto
      .col-lg
        p.mb-2 Los sistemas de distribución corresponden a la forma en que las empresas organizan y gestionan sus canales para llevar el producto al consumidor. Estos sistemas pueden variar según el nivel de integración, control y uso de tecnología.

        p.mb-0 Entre los principales sistemas se encuentran:


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 1.
          span Tipos de sistema de distribución
        .tabla-a.tb-custom.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th() Sistema de distribución
                th() Concepto
                th() Ejemplo
            tbody
              tr
                td Sistema vertical
                td Integra y coordina diferentes niveles del canal, como productores, mayoristas y minoristas, para mejorar la eficiencia y reducir conflictos en la comercialización.
                td Un fabricante coordina con distribuidores y tiendas las condiciones de abastecimiento, promoción y venta de sus productos.
              tr
                td Sistema horizontal
                td Se presenta cuando dos o más empresas ubicadas en un mismo nivel del canal establecen acuerdos para aprovechar conjuntamente recursos, capacidades u oportunidades comerciales.
                td Dos cadenas minoristas comparten infraestructura logística para ampliar su cobertura en determinadas zonas geográficas.
              tr
                td Sistema multicanal
                td Consiste en utilizar simultáneamente diferentes canales de distribución para facilitar que los productos lleguen a distintos segmentos de clientes y ampliar la cobertura comercial.
                td Una empresa comercializa sus productos mediante tiendas físicas, distribuidores, página web y plataformas de comercio electrónico.

             
    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .row.align-items-center.bg-fondo-07.p-4
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
          .col-lg
            p.mb-0 En la práctica, Falabella implementa un sistema multicanal que combina tiendas físicas, comercio electrónico, marketplace y aplicaciones móviles. Por su parte, McDonald’s utiliza un sistema vertical altamente controlado mediante franquicias que operan bajo estándares definidos por la marca.


    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Utilidades


    .container
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center.bg-color-06
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema2/img12.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-3
          p.mb-0(data-aos="fade-right") La distribución genera valor al facilitar que los productos lleguen al cliente en el lugar, momento y condiciones adecuadas, contribuyendo a la eficiencia comercial y a la satisfacción del consumidor.
      
    p.mb-4 Las principales utilidades de la distribución son:

    .row.mb-lg-5.mb-4.justify-content-center
      .col-lg-6.col-xl-3.col-md-6.col-sm-12.p-2.mb-4.mb-xl-0
        .tarjeta.bg-fondo-08.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/img14.svg' alt='', style="width: 90px;").mx-auto
          h4.text-center Utilidad de lugar
          p.text-center Acerca el producto al consumidor mediante puntos de venta adecuados.

      .col-lg-6.col-xl-3.col-md-6.col-sm-12.p-2.mb-4.mb-xl-0
        .tarjeta.bg-fondo-08.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/img15.svg' alt='', style="width: 90px;").mx-auto
          h4.text-center Utilidad de tiempo
          p.text-center Garantiza la disponibilidad del producto cuando el cliente lo requiere.

      .col-lg-6.col-xl-3.col-md-6.col-sm-12.p-2.mb-4.mb-xl-0
        .tarjeta.bg-fondo-08.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/img16.svg' alt='', style="width: 90px;").mx-auto
          h4.text-center Utilidad de posesión
          p.text-center Facilita la compra mediante procesos de adquisición accesibles.

      .col-lg-6.col-xl-3.col-md-6.col-sm-12.p-2.mb-4.mb-xl-0
        .tarjeta.bg-fondo-08.p-4.h-100
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/img17.svg' alt='', style="width: 90px;").mx-auto
          h4.text-center Utilidad de forma
          p.text-center Adapta el producto para satisfacer las necesidades del consumidor.


    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .row.align-items-center.bg-fondo-07.p-4
          .col-lg-auto.order-2
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
          .col-lg.order-1
            p.mb-0 En el contexto empresarial, Rappi genera utilidad de tiempo mediante entregas rápidas, Amazon combina utilidad de lugar y tiempo a través de su red logística, y IKEA aporta utilidad de forma al ofrecer productos diseñados para ensamblaje por parte del cliente.

    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .row.bg-fondo-09.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-6.mb-3.mb-lg-0.order-2.order-md-2.order-lg-1.p-0
              figure
                img(src="@/assets/curso/tema2/img18.png", data-aos="fade-right").w-50.mx-auto
            .col-lg-6.order-1.order-md-1.order-lg-2.p-4.p-lg-3
              p(data-aos="fade-left").mb-4 Ir al pódcast:
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="La logística y la distribución hoy"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )

    

  //

    .bg-full-width.bg-fondo-1
    
      img(src="@/assets/curso/tema2/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-11(data-aos="fade-right")
          p.banner-text La segmentación y el posicionamiento constituyen fundamentos estratégicos para la construcción de propuestas comerciales efectivas en entornos digitales. Su aplicación permite comprender las características del consumidor, identificar grupos con necesidades específicas y diseñar acciones orientadas a generar diferenciación competitiva. En las ventas en <em>social media</em>, estos procesos facilitan optimizar recursos, personalizar mensajes y fortalecer la relevancia de las estrategias comerciales desarrolladas mediante plataformas digitales y redes sociales.

      separador
      
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Segmentación

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema2/img02.png", data-aos="zoom-in")
        .col-lg-7
          p.mb-3(data-aos="fade-right") La segmentación corresponde al proceso mediante el cual una organización divide un mercado amplio en grupos de consumidores que comparten características, comportamientos o necesidades similares. Su aplicación permite comprender con mayor precisión las particularidades de cada grupo y diseñar estrategias comerciales ajustadas a sus expectativas. En contextos digitales, la segmentación adquiere especial relevancia debido a la disponibilidad de información que facilita identificar patrones de comportamiento y preferencias específicas.

          .bg-color-014.p-3.br-15.mb-0(data-aos="fade-left")
            p.mb-0 La necesidad de segmentar surge porque los consumidores no reaccionan de manera uniforme frente a productos, contenidos o campañas comerciales. Cuando una organización intenta dirigirse a todos los usuarios utilizando el mismo mensaje, disminuye la probabilidad de generar conexión efectiva. En cambio, al identificar segmentos específicos, resulta posible adaptar propuestas de valor, formatos de contenido y canales de interacción según características particulares de la audiencia objetivo.


    .row.align-items-center(data-aos="fade-right")
      .col-lg-12.mx-auto
        .tarjeta.bg-fondo-04.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema2/img04.png")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.max-cont-md.mx-auto.mx-lg-0.text-center.text-lg-start ¿Qué es la segmentación de mercado, cuándo se realiza y para qué sirve?
              p.mb-0 Lo invitamos a consultar el siguiente recurso educativo para profundizar en la temática abordada. El recurso corresponde a un video que presenta el concepto de segmentación de mercados como una herramienta estratégica para identificar grupos de consumidores con características, necesidades y comportamientos similares.
            .col-12.col-lg-auto.text-center
              a.boton.bg-color-04(:href="'https://www.youtube.com/watch?v=-MI8RMP98kk'" target="_blank")
                span Ir al recurso
                i.fas.fa-link

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Posicionamiento

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8.order-2.order-lg-1
        p.mb-3(data-aos="fade-right") El posicionamiento corresponde al lugar que una marca, producto o servicio ocupa en la mente del consumidor respecto a sus competidores. No depende exclusivamente de las características ofrecidas, sino de la percepción construida mediante experiencias, comunicación y propuestas de valor. En mercados digitales altamente competitivos, el posicionamiento se convierte en un factor estratégico porque influye directamente en la capacidad de una organización para diferenciarse y generar preferencia comercial.

        .bg-fondo-05.p-4.br-15.mb-0(data-aos="fade-left")
          p.mb-0 La construcción de este proceso requiere coherencia entre la identidad de marca, las necesidades del consumidor y los mensajes difundidos mediante diferentes canales digitales. Cuando una organización proyecta atributos consistentes y relevantes, facilita que los consumidores asocien la marca con beneficios específicos. Esta asociación favorece el reconocimiento, incrementa la confianza y fortalece la capacidad para competir dentro de mercados donde múltiples alternativas ofrecen soluciones similares.
      .col-lg-4.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img05.png", data-aos="zoom-in")

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img07.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-07.p-4.br-15(data-aos="fade-right")
          p.text-bold.mb-2 Ejemplo aplicado
          p.mb-0 La empresa EcoCoffee competía en un mercado saturado de productos similares. Aunque ofrecía café de alta calidad, los consumidores no percibían diferencias significativas respecto a otras marcas disponibles. Como consecuencia, la organización enfrentaba dificultades para destacar dentro de plataformas digitales. Después de realizar un análisis estratégico, decidió posicionarse alrededor de prácticas sostenibles y apoyo a productores locales. La comunicación comenzó a resaltar historias reales, procesos responsables y beneficios asociados con el consumo consciente. Con el tiempo, la marca fortaleció su reconocimiento y logró construir una identidad claramente diferenciada dentro de su mercado objetivo.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 1.
          span Elementos del posicionamiento comercial
        .tabla-a.tb-custom.mb-0
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th(width="30%") Elemento
                th(width="70%") Aplicación estratégica
            tbody
              tr
                td <b>Diferenciación</b>
                td Permite destacar atributos únicos frente a alternativas disponibles.
              tr
                td <b>Propuesta de valor</b>
                td Comunica beneficios relevantes para necesidades específicas del consumidor.
              tr
                td <b>Consistencia</b>
                td Fortalece el reconocimiento mediante mensajes coherentes y sostenidos.
              tr
                td <b>Percepción</b>
                td Influye en la forma como los consumidores interpretan la marca.

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 <em>Lead magnet</em>

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img08.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-3(data-aos="fade-right") El <em>lead magnet</em> constituye un recurso de valor diseñado para atraer consumidores potenciales y motivarlos a compartir información de contacto a cambio de un beneficio específico. Su utilización responde a la necesidad de generar relaciones comerciales progresivas antes de realizar una propuesta de venta directa. En entornos digitales, esta estrategia permite captar prospectos interesados en una temática determinada, facilitando posteriores acciones de comunicación y seguimiento comercial orientadas a la conversión.

        .bg-color-01.p-4.br-15(data-aos="fade-left")
          p.mb-0 La efectividad de un <em>lead magnet</em> depende de su capacidad para resolver una necesidad concreta o proporcionar información relevante para la audiencia objetivo. Recursos como guías, plantillas, listas de verificación, <em>webinars</em> o contenidos especializados suelen emplearse porque ofrecen beneficios inmediatos al usuario. Cuando existe coherencia entre el recurso entregado y el producto comercializado posteriormente, aumentan significativamente las probabilidades de construir relaciones comerciales sostenibles y generar confianza.

    .bg-color-07.p-3.br-15.mb-5(data-aos="fade-right")
      p.mb-0 En este contexto, un <em>lead magnet</em> puede adoptar diferentes formatos según las necesidades de información de los consumidores y el tipo de relación comercial que se busca desarrollar, entre ellos:

    h4.mb-2.text-bold Ejemplos de <em>lead magnet</em> y aplicación estratégica
    TabsC.color-primario.mb-5(data-aos="zoom-in")
      .p-3.p-md-4(titulo="Guía digital")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0.p-4
            p.mb-0 Facilita compartir conocimiento especializado relacionado con necesidades específicas.
          .col-lg-5.col-md-10.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img09.png', alt='')

      .p-3.p-md-4(titulo="Plantilla")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0.p-4
            p.mb-0 Permite resolver tareas concretas mediante recursos prácticos y reutilizables.
          .col-lg-5.col-md-10.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img10.png', alt='')

      .p-3.p-md-4(titulo="<em>Webinar</em>")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0.p-4
            p.mb-0 Favorece la interacción directa y profundización temática con consumidores interesados.
          .col-lg-5.col-md-10.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img11.png', alt='')

      .p-3.p-md-4(titulo="Lista de verificación")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0.p-4
            p.mb-0 Ayuda a simplificar procesos mediante orientaciones estructuradas y aplicables.
          .col-lg-5.col-md-10.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img12.png', alt='')

    .bg-full-width.bg-fondo-1
  
      .row.align-items-center.mb-0(data-aos="fade-right")
        .col-lg-12.col-xl-8.mx-auto
          .bg-color-09.br-15.mb-0
            .row.align-items-center.justify-content-center(data-aos="fade-right")
              .col-lg-auto.d-none.d-lg-block.order-lg-1
                img(src="@/assets/curso/tema1/img08.png", style="max-width: 150px;").mx-auto
              .col-lg-9.order-1.order-lg-2.p-4
                .bg-color-08.p-2.mb-2.max-cont-md
                  h4.mb-0.text-bold.text-white Clave estratégica
                p.mb-0 Un <em>lead magnet</em> efectivo debe resolver una necesidad inmediata relacionada con la solución comercial ofrecida posteriormente.

      separador

      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.4 Palabras clave e intenciones de búsqueda

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-5.col-md-8.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema2/img13.png", data-aos="zoom-in")
        .col-lg-7
          p.mb-3(data-aos="fade-right") Las palabras clave corresponden a términos o expresiones utilizados por los usuarios para buscar información, productos o servicios en entornos digitales. Su análisis permite comprender cómo las personas expresan necesidades, intereses y problemas dentro de motores de búsqueda y plataformas digitales. En las ventas en <em>social media</em>, las palabras clave facilitan optimizar contenidos y estrategias de comunicación, favoreciendo una mayor conexión entre las búsquedas realizadas por los consumidores y las soluciones ofrecidas por las organizaciones.

          .bg-color-01.p-4.br-15(data-aos="fade-left")
            p.mb-0 Las intenciones de búsqueda representan el propósito que motiva una consulta digital. Estas pueden clasificarse como informativas, cuando el usuario busca conocimiento; navegacionales, cuando desea acceder a una página específica; comerciales, cuando compara alternativas antes de comprar; y transaccionales, cuando existe intención directa de adquisición. Comprender estas diferencias permite diseñar contenidos alineados con el momento y la necesidad específica del consumidor dentro de su recorrido digital. Para identificar tendencias, seleccionar términos relevantes y comprender cómo buscan información los consumidores en entornos digitales, existen diferentes herramientas que facilitan el análisis de palabras clave, entre ellas:

      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-6.mb-4
          .bg-color-015.p-4.br-15.h-100
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/tema2/img14.svg", style="max-width: 60px;").mx-auto
              .col
                h4.mb-1 Google Trends:
                p.mb-0 Permite identificar tendencias y evolución de términos buscados digitalmente.

        .col-lg-6.mb-4
          .bg-color-015.p-4.br-15.h-100
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/tema2/img14.svg", style="max-width: 60px;").mx-auto
              .col
                h4.mb-1 Google Keyword Planner:
                p.mb-0 Facilita analizar el volumen y la relevancia de palabras clave comerciales.

        .col-lg-6.mb-4.mb-lg-0
          .bg-color-015.p-4.br-15.h-100
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/tema2/img14.svg", style="max-width: 60px;").mx-auto
              .col
                h4.mb-1 Semrush:
                p.mb-0 Proporciona información estratégica sobre posicionamiento y competencia digital.

        .col-lg-6
          .bg-color-015.p-4.br-15.h-100
            .row.align-items-center
              .col-auto
                img(src="@/assets/curso/tema2/img14.svg", style="max-width: 60px;").mx-auto
              .col
                h4.mb-1 Ubersuggest:
                p.mb-0 Ayuda a descubrir oportunidades relacionadas con búsquedas y contenidos digitales.

    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12.col-xl-8.mx-auto
        .bg-color-07.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img15.png").mx-auto
            .col-lg-7.order-lg-2.p-4
              .bg-color-06.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold Pregunta de aplicación
              p.mb-0 ¿Cómo podría una empresa de productos ecológicos utilizar palabras clave e intenciones de búsqueda para mejorar la visibilidad de sus contenidos digitales?

    separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 <em>Insights</em>

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img15.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-3(data-aos="fade-right") Los <em>insights</em> son hallazgos relevantes obtenidos a partir del análisis de información sobre consumidores, mercados y comportamientos digitales. Su importancia radica en que permiten transformar datos dispersos en conocimiento útil para la toma de decisiones estratégicas. En las ventas en <em>social media</em>, los <em>insights</em> facilitan la comprensión de motivaciones, necesidades y patrones de interacción que influyen directamente en la efectividad de las acciones comerciales desarrolladas por las organizaciones.

        .bg-color-01.p-4.br-15(data-aos="fade-left")
          p.mb-0 Las principales características de un <em>insight</em> están asociadas con su capacidad para revelar comportamientos significativos, aportar valor estratégico y orientar decisiones empresariales. Un <em>insight</em> no corresponde únicamente a un dato o una métrica aislada; representa una interpretación que explica por qué ocurre determinado comportamiento y cuáles pueden ser sus implicaciones comerciales. Esta capacidad analítica permite a las organizaciones diseñar estrategias más pertinentes y alineadas con las expectativas del consumidor digital.

    .bg-color-07.p-3.br-15.mb-5(data-aos="fade-right")
      p.mb-0 Para analizar la información obtenida de los consumidores y convertirla en decisiones comerciales, es posible identificar diferentes tipos de <em>insights</em> según el aspecto que se busca comprender, entre ellos:

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-016").mb-5(data-aos="zoom-in")
      .tarjeta.p-4(titulo="<em>Insight</em> de consumidor")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-3 Permite comprender motivaciones, necesidades, expectativas y comportamientos de compra del consumidor, facilitando decisiones comerciales más precisas y estrategias orientadas a generar valor.
            p.mb-0 <b>Ejemplo aplicativo:</b> una tienda identifica que sus clientes prefieren recibir recomendaciones personalizadas antes de realizar una compra y adapta sus contenidos digitales a este comportamiento.
          .col-lg-4.col-md-10
            figure
              img(src='@/assets/curso/tema2/img16.png', alt='')

      .tarjeta.p-4(titulo="<em>Insight</em> de mercado")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-3 Facilita identificar tendencias, cambios en la demanda, oportunidades de crecimiento y dinámicas competitivas que apoyan la formulación de estrategias comerciales efectivas.
            p.mb-0 <b>Ejemplo aplicativo:</b> una empresa detecta un aumento en las búsquedas de productos sostenibles y desarrolla una línea de productos orientada a esta tendencia.
          .col-lg-4.col-md-10
            figure
              img(src='@/assets/curso/tema2/img17.png', alt='')

      .tarjeta.p-4(titulo="<em>Insight</em> de producto")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-3 Ayuda a interpretar la percepción, aceptación, satisfacción y experiencia de los consumidores respecto a productos, permitiendo optimizar atributos y propuestas de valor.
            p.mb-0 <b>Ejemplo aplicativo:</b> una marca identifica que los consumidores valoran más la facilidad de uso de un producto y destaca este atributo en sus contenidos comerciales.
          .col-lg-4.col-md-10
            figure
              img(src='@/assets/curso/tema2/img18.png', alt='')

      .tarjeta.p-4(titulo="<em>Insight</em> de comunicación")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-3 Permite evaluar la efectividad de mensajes, contenidos y acciones comunicativas, favoreciendo ajustes que incrementen el alcance, la interacción y los resultados comerciales obtenidos.
            p.mb-0 <b>Ejemplo aplicativo:</b> una empresa identifica que los videos cortos generan mayor interacción que las publicaciones estáticas y ajusta su estrategia de contenidos.
          .col-lg-4.col-md-10
            figure
              img(src='@/assets/curso/tema2/img19.png', alt='')

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img20.png", data-aos="zoom-in")
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
        .bg-color-07.p-4.br-15(data-aos="fade-right")
          p.text-bold.mb-2 Ejemplo aplicado
          p.mb-0 La organización Natural Beauty comercializaba productos para el cuidado de la piel mediante redes sociales. Aunque contaba con diferentes líneas de producto, desconocía cuáles eran los temas que generaban mayor interés entre sus consumidores. Con el propósito de mejorar sus resultados, comenzó a analizar métricas de interacción, comentarios y consultas recibidas en sus plataformas digitales. Después de varias semanas identificó que los contenidos relacionados con protección solar obtenían mayor alcance, participación y tiempo de visualización. Este hallazgo permitió desarrollar nuevas campañas orientadas a dicha necesidad, optimizar recursos de comunicación y aumentar las ventas de productos asociados. El caso demuestra cómo los <em>insights</em> permiten convertir información en decisiones estratégicas con impacto comercial tangible.

    .row.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-10.mx-auto
        .bg-color-01.br-15.mb-0
          .row.align-items-center.justify-content-center(data-aos="fade-right")
            .col-lg-auto.d-none.d-lg-block.order-lg-1
              img(src="@/assets/curso/tema1/img30.png", style="max-width: 150px;").mx-auto
            .col-lg-9.order-1.order-lg-2.p-4
              .bg-color-10.p-2.mb-2.max-cont-md
                h4.mb-0.text-bold.text-white Cita de reflexión
              p.mb-0 "La información puede revelar oportunidades comerciales, pero solo la integridad permite utilizar ese conocimiento de manera responsable y respetuosa con las necesidades reales de los consumidores".

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
