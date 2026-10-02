<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Acuerdos comerciales

    .bg-full-width.bg-fondo-02.px-5.py-4
      img(src="@/assets/curso/tema5/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text En la distribución comercial, las relaciones entre los actores del canal requieren condiciones que orienten la negociación y operación. En este contexto, los acuerdos comerciales facilitan la coordinación, optimizan procesos y fortalecen la gestión de la comercialización. 

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Concepto

    .bloque-texto-g.bg-color-01.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los acuerdos comerciales son instrumentos clave dentro de la distribución, ya que establecen las condiciones bajo las cuales los actores del canal interactúan. Su correcta definición permite garantizar relaciones claras, eficientes y sostenibles entre productores, intermediarios y distribuidores. En el contexto actual, estos acuerdos también incorporan aspectos logísticos, comerciales y tecnológicos.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-5.mb-4.mb-lg-0
        p.mb-0 Estos acuerdos permiten regular aspectos como precios, volúmenes de compra, territorios de venta, tiempos de entrega, condiciones de pago y exclusividad. Su finalidad es asegurar el cumplimiento de los objetivos comerciales y optimizar la relación entre los participantes del canal.

      .col-lg-7
        .bg-fondo-01.br-15.mb-0.p-4
          p.mb-0 En la práctica, empresas como Nestlé establecen acuerdos con distribuidores para garantizar cobertura territorial, mientras que Coca-Cola define condiciones específicas con minoristas para asegurar visibilidad del producto y rotación en el punto de venta.

    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Tipos

    .bg-full-width.bg-fondo-1
      .row.align-items-center.mb-3.justify-content-center
        .col-lg-auto.d-none.d-lg-flex
          img(src="@/assets/curso/tema5/img03.svg").mx-auto
        .col-lg
          p.mb-2 Los acuerdos comerciales se clasifican según su alcance, las condiciones pactadas y la relación establecida entre las partes, con el propósito de regular la comercialización y distribución de productos.
          p.mb-0 Los principales tipos son:
      

      .row.mb-lg-4.mb-5.justify-content-center.align-items-center
        .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure.mb-3
            img(src="@/assets/curso/tema5/img04.png", data-aos="zoom-in").mx-auto
        .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="De distribución").align-content-center
              p.mb-2 Establecen las condiciones mediante las cuales una empresa autoriza a otra para comercializar sus productos en determinados mercados, territorios o canales.
              p.mb-0 #[b Ejemplo:] un fabricante acuerda con un distribuidor comercializar sus bebidas en supermercados de una región.

            .tarjeta.color-acento-botones--borde.p-4(titulo="De exclusividad").align-content-center
              p.mb-2 Otorgan a una de las partes derechos exclusivos para comercializar determinados productos, marcas o servicios bajo condiciones previamente establecidas.
              p.mb-0 #[b Ejemplo:] una empresa concede a un distribuidor la venta exclusiva de sus productos en una zona geográfica determinada.

            .tarjeta.color-acento-botones--borde.p-4(titulo="De franquicia").align-content-center
              p.mb-2 Autorizan al franquiciado a utilizar una marca, modelo de negocio, procedimientos y conocimientos comerciales definidos por el franquiciante, bajo condiciones acordadas.
              p.mb-0 #[b Ejemplo:] un empresario opera un restaurante utilizando la marca y el modelo comercial de una cadena.

            .tarjeta.color-acento-botones--borde.p-4(titulo="De suministro").align-content-center
              p.mb-2 Regulan el abastecimiento periódico de productos, materias primas o insumos entre proveedor y comprador, definiendo cantidades, precios, calidad y condiciones de entrega.
              p.mb-0 #[b Ejemplo:] un proveedor acuerda entregar semanalmente productos lácteos a una cadena de supermercados.
      
      .container
        .row.mb-lg-4.mb-4.justify-content-center.align-items-center
          .col-lg-10.col-md-12
            .row.align-items-center.bg-fondo-07.p-4
              .col-lg-auto
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/img10.png", style="max-width: 150px").mx-auto
              .col-lg
                p.mb-0 En el entorno empresarial, McDonald’s opera bajo acuerdos de franquicia que garantizan estandarización del servicio, mientras que Samsung utiliza acuerdos de distribución con retailers para posicionar sus productos en grandes superficies.

      separador
      
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.3 Funciones

      p.mb-4 Los acuerdos comerciales cumplen funciones que facilitan la relación entre las partes y contribuyen al desarrollo eficiente de los procesos de distribución. Las principales funciones son:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img05.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Regulación
            p.mb-0 Define las condiciones, responsabilidades, derechos y obligaciones que orientan la relación entre las partes y el desarrollo de las operaciones comerciales.
            p.mb-0 #[b Ejemplo:] un acuerdo establece precios, territorios autorizados y condiciones para comercializar determinados productos.

      .col-xl-3.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img06.png", alt="")
          .crd_hover_txt--body.py-xl-4.px-xl-2
            h4.mb-3.text-center Coordinación
            p.mb-0 Articula las actividades de los participantes para facilitar el abastecimiento, comercialización y entrega de productos conforme a condiciones previamente acordadas.
            p.mb-0 #[b Ejemplo:] fabricante y distribuidor coordinan inventarios, pedidos y fechas de entrega para atender oportunamente los puntos de venta.

      .col-xl-3.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img07.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Control
            p.mb-0 Establece mecanismos para verificar el cumplimiento de las condiciones pactadas y realizar seguimiento al desempeño de las partes.
            p.mb-0 #[b Ejemplo:] una empresa revisa periódicamente ventas, inventarios y estándares de servicio establecidos con su distribuidor.

      .col-xl-3.col-lg-6.col-md-10.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img08.png", alt="")
          .crd_hover_txt--body
            h4.mb-3.text-center Estabilidad
            p.mb-0 Favorece relaciones comerciales continuas al establecer condiciones que brindan previsibilidad y confianza entre las partes durante un periodo determinado.
            p.mb-0 #[b Ejemplo:] un proveedor garantiza entregas mensuales durante un año, permitiendo al comprador planificar su abastecimiento.

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-10.col-md-12
        .cajon.bg-color-c1.p-4
          p.mb-0 En la práctica, empresas como Grupo Éxito establecen acuerdos con proveedores para garantizar abastecimiento continuo, condiciones de exhibición y estrategias promocionales, mientras que Amazon regula su marketplace mediante acuerdos que definen condiciones de venta para terceros.



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
