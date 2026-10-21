<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4.justify-content-center.align-items-center
      .col-lg-12
        p.mb-0(data-aos="fade-right") El componente formativo Principios de la distribución comercial aborda el estudio de los productos, su distribución, incluyendo su concepto, tipos, plan, sistemas y utilidades, como un elemento clave dentro de la comercialización. En este contexto, se analizan los canales de distribución, su clasificación, características, estructura y métodos de selección, así como el papel de los intermediarios, los acuerdos comerciales en la gestión del mercado y el análisis de los formatos comerciales.


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="La figura presenta la estructura general del componente formativo Principios de la distribución comercial, organizando de manera jerárquica los conocimientos necesarios para comprender cómo los productos llegan al mercado y al consumidor. Integra elementos relacionados con las características de la oferta, las alternativas para su comercialización, la configuración de los canales, la participación de diferentes actores y las relaciones que establecen. Además, incorpora aspectos que orientan la selección y funcionamiento de las distintas modalidades comerciales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
