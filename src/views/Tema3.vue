<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Canales de distribución

    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema3/img01.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-2.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") Los canales de distribución representan la estructura mediante la cual los productos se trasladan desde el productor hasta el consumidor final. Su diseño implica decisiones estratégicas relacionadas con intermediarios, cobertura de mercado, control comercial y eficiencia logística. 
        
        .bg-fondo-05.br-15.mb-0.p-4
          p.mb-0 En entornos actuales, los canales integran tanto medios físicos como digitales, configurando esquemas multicanal y omnicanal que responden a nuevos comportamientos de consumo.

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto

    p.mb-4 Los canales de distribución se definen como el conjunto de organizaciones, intermediarios y procesos que participan en el flujo de productos desde el productor hasta el consumidor final. Estos canales permiten transferir propiedad, facilitar el acceso al producto y garantizar su disponibilidad en el mercado.


    .bloque-texto-g.bloque-texto-g--inverso.bg-color-08.p-4.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde el enfoque comercial, los canales cumplen funciones como negociación, promoción, almacenamiento y entrega, convirtiéndose en un elemento clave para la ejecución de la estrategia de mercado. Su diseño depende de variables como tipo de producto, mercado objetivo, capacidad logística y nivel de control deseado por la empresa.


    .row.align-items-center.mb-3.justify-content-center
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema3/img03.svg").mx-auto
      .col-lg
        p.mb-0 En la práctica, Nestlé utiliza una red amplia de distribuidores mayoristas y minoristas para asegurar cobertura nacional, mientras que Dell ha implementado modelos de venta directa a través de comercio electrónico, reduciendo intermediarios y optimizando costos.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Clasificación

    p.mb-4 Los canales de distribución se clasifican según el número de intermediarios que participan en el proceso de comercialización. Los principales tipos son:

    .bg-full-width.bg-fondo-1
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-4
            h5.text-bold.mb-2 Figura 1.
            span Clasificación de los canales de distribución
          img.mb-0(data-aos="fade-up", src="@/assets/curso/tema3/img06.png", alt="La figura muestra los diferentes canales de distribución por medio de un ejemplo donde se representan diferentes recorridos que puede seguir un producto desde su origen hasta llegar al consumidor final. Se observa que, el producto puede entregarse directamente al cliente o pasar por uno o varios intermediarios que facilitan su disponibilidad en el mercado. La representación permite comprender cómo aumenta la participación de actores comerciales a medida que se amplía el recorrido del producto dentro del proceso de distribución. ").mx-auto.d-none.d-lg-block
          img.mb-0(data-aos="fade-up", src="@/assets/curso/tema3/img07.png", alt="La figura muestra los diferentes canales de distribución por medio de un ejemplo donde se representan diferentes recorridos que puede seguir un producto desde su origen hasta llegar al consumidor final. Se observa que, el producto puede entregarse directamente al cliente o pasar por uno o varios intermediarios que facilitan su disponibilidad en el mercado. La representación permite comprender cómo aumenta la participación de actores comerciales a medida que se amplía el recorrido del producto dentro del proceso de distribución. ").mx-auto.d-lg-none


      .container
        .row.mb-lg-4.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-07.p-4
              .col-lg-auto
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
              .col-lg
                p.mb-0 En el contexto real, Apple combina canal directo mediante sus tiendas y página web, mientras que Procter & Gamble utiliza canales indirectos largos a través de mayoristas y supermercados para productos de consumo masivo.

      separador
      
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Características

    .bg-full-width.bg-fondo-02.px-5.py-4
      img(src="@/assets/curso/tema3/img04.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Presentan características que determinan la manera en que los productos se movilizan y comercializan hasta llegar al consumidor final. Su configuración depende de las relaciones entre los participantes, el mercado que se desea atender, los recursos disponibles y los objetivos comerciales de la empresa. Analizar estas características permite seleccionar y gestionar el canal de acuerdo con las necesidades del producto y del mercado.


    .row.mb-4.justify-content-center.align-items-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 2.
          span Características de los canales de distribución
        .tabla-a.tb-custom.mb-0
          table
            //- caption Nota. SENA, (2026).
            thead
              tr
                th() Característica
                th() Concepto
                th() Ejemplo
            tbody
              tr
                td Interdependencia
                td Se refiere a la relación existente entre los participantes del canal, donde las decisiones y actividades de cada integrante pueden afectar a los demás. Productores, distribuidores y minoristas deben coordinar sus procesos para alcanzar los objetivos comerciales establecidos.
                td Si un fabricante retrasa una entrega, el distribuidor y las tiendas pueden quedarse sin producto para vender.
              tr
                td Cobertura
                td Representa el alcance geográfico y comercial que permite lograr el canal para colocar los productos a disposición del mercado objetivo. Puede comprender desde puntos específicos de venta hasta una presencia amplia en diferentes ciudades, regiones o mercados.
                td Una marca de bebidas utiliza supermercados y tiendas de barrio para alcanzar consumidores en diferentes zonas del país.
              tr
                td Nivel de control
                td Indica el grado de influencia que conserva la empresa sobre aspectos como precios, presentación, promoción, inventarios, servicio y experiencia del cliente. La participación de intermediarios puede modificar el control que mantiene el productor durante la comercialización del producto.
                td Una empresa que vende en tiendas propias controla directamente la presentación, promoción y experiencia de compra de sus productos.
              tr
                td Costos
                td Comprenden los recursos económicos asociados con la operación del canal, como transporte, almacenamiento, inventarios, intermediación y gestión comercial. Su análisis permite determinar si la estructura seleccionada facilita una distribución eficiente y económicamente sostenible para la organización.
                td Una empresa compara el costo de distribuir directamente con el de contratar mayoristas antes de seleccionar su canal.
              tr
                td Flexibilidad
                td Corresponde a la capacidad del canal para adaptarse a cambios en la demanda, comportamiento del consumidor, condiciones del mercado o tecnologías. Permite modificar procesos e incorporar alternativas de comercialización para responder oportunamente a las necesidades del entorno.
                td Una tienda tradicional incorpora ventas por internet y entregas a domicilio para responder a nuevos hábitos de compra.

    p.mb-4 Estas características influyen directamente en la toma de decisiones estratégicas. Por ejemplo, Zara mantiene un alto control sobre su canal de distribución mediante integración vertical, lo que le permite responder rápidamente a tendencias del mercado.
    
    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Estructura

    p.mb-4 La estructura de los canales de distribución hace referencia a la organización de los actores que participan en el proceso de comercialización, desde el productor hasta el consumidor final. Según el nivel de intermediación, se identifican las siguientes estructuras:

    .bg-full-width.bg-fondo-1
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-4
            h5.text-bold.mb-2 Figura 2.
            span Estructura de los canales de distribución
          img.mb-3(data-aos="fade-up", src="@/assets/curso/tema3/img08.png", alt="La figura representa los diferentes niveles que puede tener un canal de distribución según la cantidad de intermediarios que participan entre el productor y el consumidor final. La secuencia inicia con una relación comercial directa y, progresivamente, incorpora actores que apoyan la comercialización, el manejo de grandes volúmenes y la llegada del producto a mercados más amplios. A medida que aumenta el nivel, el recorrido se hace más extenso y requiere una mayor participación de intermediarios para facilitar la distribución.").mx-auto.d-none.d-lg-block
          img.mb-3(data-aos="fade-up", src="@/assets/curso/tema3/img09.png", alt="La figura representa los diferentes niveles que puede tener un canal de distribución según la cantidad de intermediarios que participan entre el productor y el consumidor final. La secuencia inicia con una relación comercial directa y, progresivamente, incorpora actores que apoyan la comercialización, el manejo de grandes volúmenes y la llegada del producto a mercados más amplios. A medida que aumenta el nivel, el recorrido se hace más extenso y requiere una mayor participación de intermediarios para facilitar la distribución.").mx-auto.d-lg-none

      .container
        .row.mb-lg-4.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-07.p-4
              .col-lg-auto
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
              .col-lg
                p.mb-0 En el entorno empresarial, Unilever utiliza estructuras de múltiples niveles para lograr cobertura masiva, mientras que Tesla ha optado por estructuras directas eliminando intermediarios para mantener control total sobre la experiencia de compra.

      separador
      
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.5 Métodos de selección

      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-12.col-md-12
          .bg-fondo-01.br-15.mb-0.p-4
            p.mb-0 La selección de los canales de distribución es un proceso estratégico mediante el cual la empresa define los intermediarios o medios que utilizará para llevar sus productos al mercado. Esta decisión debe considerar aspectos comerciales, logísticos y las características del mercado. Los principales criterios para seleccionar un canal de distribución son:


      .row.mb-lg-4.mb-5.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure.mb-3
            img(src="@/assets/curso/tema3/img05.png", data-aos="zoom-in").mx-auto
        .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Mercado objetivo").align-content-center
              p.mb-0 Identifica las características, ubicación, necesidades, hábitos de compra y preferencias de los consumidores a quienes se dirige el producto, para seleccionar los canales que permitan alcanzar adecuadamente al público definido por la empresa.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Capacidad logística").align-content-center
              p.mb-0 Determina los recursos, infraestructura, tecnología y procesos disponibles para almacenar, transportar y entregar los productos, permitiendo seleccionar un canal acorde con la capacidad operativa de la empresa y las condiciones requeridas por el mercado.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Nivel de control").align-content-center
              p.mb-0 Establece el grado de participación que la empresa desea mantener sobre la comercialización del producto, incluyendo precios, promoción, presentación, servicio y relación con los clientes, para definir la conveniencia de incorporar determinados intermediarios en el canal.

            .tarjeta.color-acento-botones--borde.p-4(titulo="Costos").align-content-center
              p.mb-0 Compara los recursos económicos requeridos por las diferentes alternativas de distribución, considerando transporte, almacenamiento, inventarios, intermediación y gestión comercial, para seleccionar un canal que responda a las necesidades empresariales y mantenga una operación económicamente sostenible.

    p.mb-5 En la práctica, Samsung selecciona canales combinando distribuidores autorizados, retail y comercio electrónico, mientras que Rappi actúa como canal digital que conecta restaurantes con consumidores, optimizando la distribución en entornos urbanos.


    
    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-11.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema1/img13.png")
            .col-12.col-lg.mb-2.mb-lg-0
              //- h4.mb-2.max-cont-md.mx-lg-0.text-lg-start Qué es un producto: características, tipos, propósitos, benedicios.
              p.mb-0 Para comprender los conceptos, tipos y funcionamiento de los canales de distribución dentro de la estrategia comercial, se recomienda el siguiente recurso:
            .col-12.col-lg-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=FWs9xNZcgBw&t=29s'" target="_blank")
                span Ir al recurso
                //- i.fas.fa-link

    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .row.bg-fondo-12.align-items-center.justify-content-center.br-15.p-0
            .col-md-8.col-lg-6.mb-3.mb-lg-0.order-2.order-md-2.order-lg-2.p-0
              figure
                img(src="@/assets/curso/tema2/img18.png", data-aos="fade-right").w-50.mx-auto
            .col-lg-6.order-1.order-md-1.order-lg-1.p-4.p-lg-3
              p(data-aos="fade-left").mb-4 Ir al pódcast:
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                texto="La selección de canales de distribución: una decisión estratégica"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast2.mp3')"
              )

    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
