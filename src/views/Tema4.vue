<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Producción de contenidos digitales



    .container
      .row.mb-lg-4.mb-3.justify-content-center.align-items-center.bg-color-06
        .col-lg-5.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1.p-0
          figure
            img(src="@/assets/curso/tema4/img01.png", data-aos="zoom-in").mx-auto
        .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0.p-3
          p.mb-0(data-aos="fade-right") Los intermediarios son actores clave dentro de los canales de distribución, ya que facilitan el flujo de productos entre productores y consumidores. Su participación permite optimizar procesos comerciales, ampliar la cobertura del mercado y mejorar la eficiencia en la distribución. En entornos multicanal, su rol se ha transformado, integrando funciones logísticas, digitales y de servicio al cliente.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto

    .row.mb-lg-4.mb-3.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/img02.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") Los intermediarios se definen como organizaciones o individuos que actúan como enlace entre el productor y el consumidor final, participando en la comercialización, distribución y venta de productos. Su función principal es facilitar el acceso al producto, reducir la distancia entre oferta y demanda y mejorar la eficiencia del proceso comercial.

        .bg-fondo-05.br-15.mb-0.p-4
          p.mb-0 Estos actores no solo cumplen funciones de compra y venta, sino que también aportan valor mediante almacenamiento, transporte, promoción y servicio al cliente. La presencia de intermediarios permite a las empresas concentrarse en la producción mientras delegan la distribución a especialistas.

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Tipos


      
    .bg-full-width.bg-fondo-1
      .row.mb-lg-4.mb-4.justify-content-center.align-items-center
        .col-lg-4.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
          p.mb-2 Los intermediarios se clasifican según la función que desempeñan dentro del canal de distribución y su participación en la comercialización del producto. Los principales tipos son: 
          figure
            img(src="@/assets/curso/tema4/img03.png", data-aos="zoom-in").mx-auto.w-md-75

        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-c1").mb-0(data-aos="zoom-in")
            .tarjeta(titulo="Mayoristas")
              p.mb-0 Adquieren productos en grandes cantidades directamente de fabricantes o proveedores para almacenarlos y posteriormente venderlos a minoristas, empresas u otros intermediarios, facilitando el abastecimiento y la cobertura de diferentes zonas o mercados.

            .tarjeta(titulo="Minoristas")
              p.mb-0 Comercializan productos directamente al consumidor final mediante tiendas físicas, supermercados, establecimientos especializados o canales digitales. Facilitan el acceso al producto en cantidades adecuadas y mantienen una relación cercana con las necesidades y preferencias del comprador.

            .tarjeta(titulo="Distribuidores")
              p.mb-0 Gestionan la comercialización de productos de uno o varios fabricantes dentro de zonas o mercados determinados. Pueden desarrollar actividades de almacenamiento, transporte, promoción, venta y abastecimiento para garantizar la disponibilidad de los productos en diferentes puntos comerciales.

            .tarjeta(titulo="Agentes comerciales")
              p.mb-0 Representan a productores o empresas durante la búsqueda de clientes y negociación de operaciones comerciales, generalmente sin adquirir la propiedad de los productos. Su participación facilita contactos, acuerdos y oportunidades de venta en mercados específicos.


      .container
        .row.mb-lg-4.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-07.p-4
              .col-lg-auto
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
              .col-lg
                p.mb-0 En la práctica, Makro opera como mayorista abasteciendo negocios y comerciantes, Éxito actúa como minorista vendiendo al consumidor final, y empresas como Tecnoquímicas utilizan distribuidores para cubrir mercados regionales.
        
      separador
      
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.3 Clases

      p.mb-4 Las clases de intermediarios hacen referencia a la forma en que participan dentro del canal de distribución, según su nivel de independencia, relación contractual y funciones comerciales. Las principales clases son:

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 3.
            span Clases de intermediarios
          .tabla-a.tb-custom.mb-0
            table
              //- caption Nota. SENA, (2026).
              thead
                tr
                  th() Clase de intermediario
                  th() Definición
                  th() Ejemplo
              tbody
                tr
                  td Independientes
                  td Actúan de manera autónoma y toman sus propias decisiones comerciales, en general comprando productos para posteriormente revenderlos. Asumen directamente aspectos relacionados con inventarios, precios, clientes, proveedores y operación, sin pertenecer a la estructura organizacional del productor.
                  td Una tienda de barrio compra bebidas a diferentes proveedores y las comercializa directamente entre sus clientes.
                tr
                  td Integrados
                  td Forman parte de una misma estructura empresarial que coordina o controla diferentes actividades y niveles del canal. Esta integración permite gestionar de manera conjunta procesos como abastecimiento, almacenamiento, distribución, comercialización y venta directa al consumidor.
                  td Una empresa fabricante administra sus centros de distribución y tiendas propias para comercializar directamente sus productos.
                tr
                  td Asociados
                  td Establecen relaciones de cooperación mediante acuerdos, alianzas o modelos organizativos que permiten compartir recursos, conocimientos, imagen comercial o capacidad de negociación, conservando determinados niveles de independencia. Pueden presentarse mediante franquicias, cooperativas, cadenas voluntarias u otras formas asociativas.
                  td Varios comerciantes conforman una cooperativa para realizar compras conjuntas y obtener mejores condiciones de negociación con los proveedores.
                tr
                  td Digitales
                  td Facilitan la conexión entre oferentes y compradores mediante plataformas, aplicaciones o mercados electrónicos que apoyan la búsqueda, promoción, comparación y transacción de productos. Su participación permite ampliar el alcance comercial y facilitar operaciones en entornos digitales.
                  td Un <em>marketplace</em> conecta diferentes vendedores con consumidores y facilita la búsqueda, compra y pago de productos mediante su plataforma.


      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-10.col-md-12
          .cajon.bg-color-c1.p-4
            p.mb-0 En el contexto actual, los intermediarios digitales han ganado relevancia. Por ejemplo, Rappi actúa como intermediario entre restaurantes y consumidores, gestionando pedidos y entregas, mientras que Amazon combina intermediación con logística propia, integrando funciones tradicionales y digitales.
    
    .row.align-items-center(data-aos="fade-right")
      .col-lg-10.mx-auto
        .tarjeta.bg-fondo-11.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-6.col-sm-4.col-md-3.col-lg-2.mb-3.mb-lg-0.mx-auto.mx-lg-0.text-center
              img(src="@/assets/curso/tema1/img13.png")
            .col-12.col-lg.mb-2.mb-lg-0
              h4.mb-2.max-cont-md.mx-lg-0.text-lg-start Funciones de los intermediarios
              p.mb-0 Para comprender el papel de los intermediarios en la distribución comercial, se recomienda ir al siguiente recurso:
            .col-12.col-lg-auto.text-center
              a.boton.color-acento-botones(:href="'https://www.youtube.com/watch?v=Ruk2qM1_4XY'" target="_blank")
                span Ir al recurso
                //- i.fas.fa-link


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
