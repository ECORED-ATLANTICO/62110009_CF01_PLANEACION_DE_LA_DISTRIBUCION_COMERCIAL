<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-0.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/intro/img01.png", data-aos="zoom-in").mx-auto
      .col-lg-9.order-2.order-lg-1.mb-0.mb-lg-0
        p.mb-3(data-aos="fade-right") El componente formativo Principios de la distribución comercial desarrolla los fundamentos necesarios para comprender el diseño de los canales de distribución como parte de la estrategia comercial de las organizaciones. La distribución constituye un elemento clave para garantizar que los productos lleguen al consumidor en el lugar, momento y condiciones adecuadas, contribuyendo al cumplimiento de los objetivos de mercadeo y al fortalecimiento de la competitividad empresarial.
        
        .bg-fondo-01.br-15.mb-0.p-4
          p.mb-0 Durante el desarrollo del componente se abordan conceptos relacionados con el producto, la distribución, los canales de distribución, los intermediarios, los acuerdos comerciales y los formatos comerciales, analizando sus características, funciones y criterios de aplicación en diferentes contextos empresariales. Asimismo, se estudian aspectos asociados con la selección de canales, la cobertura del mercado y la coordinación de los actores que intervienen en el proceso de comercialización.

    .row.align-items-center.mb-3
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/intro/img02.svg").mx-auto
      .col-lg
        p.mb-0 El componente integra ejemplos empresariales, recursos audiovisuales y actividades de aprendizaje que facilitan la comprensión de los contenidos y su aplicación en situaciones reales. De esta manera, se fortalece la capacidad del aprendiz para analizar las condiciones del mercado y seleccionar canales de distribución acordes con la estrategia comercial y la normativa técnica, favoreciendo una gestión eficiente de la distribución comercial.
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
