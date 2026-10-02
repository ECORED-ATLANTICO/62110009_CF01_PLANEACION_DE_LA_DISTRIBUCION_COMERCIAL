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

    .bg-full-width.bg-fondo-1
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

              
      .container
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
      .row.justify-content-center.align-items-center.z-2.mb-5
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

             
    .container
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

    .bg-full-width.bg-fondo-1
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


      .container
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
