<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Principios de la distribución comercial',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> analizar los conceptos fundamentales de la distribución comercial para comprender su importancia en la comercialización de productos y la cobertura del mercado.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        '¡Excelente! ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
      preguntas: [
        {
          id: 1,
          texto:
            'Un atributo del producto permite diferenciarlo frente a la competencia porque:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determina únicamente el costo de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilita el cálculo de los impuestos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establece las políticas de distribución de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aporta características que generan valor para el consumidor.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Los atributos diferencian el producto y contribuyen a generar valor para el consumidor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes opciones corresponde a un atributo emocional del producto?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La identificación y el sentido de pertenencia que genera una marca.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El peso del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El material utilizado en su fabricación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tamaño del empaque.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los atributos emocionales fortalecen la conexión del consumidor con la marca.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Los productos de comparación se caracterizan porque el consumidor:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los adquiere únicamente mediante canales digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los compra por impulso y sin evaluar alternativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analiza aspectos como precio, calidad y diseño antes de comprarlos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los utiliza exclusivamente en procesos industriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los productos de comparación requieren una evaluación previa antes de la decisión de compra.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Seleccione la afirmación que describe correctamente un producto industrial.',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Está orientado al consumo inmediato del cliente final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se utiliza como insumo, equipo o materia prima en procesos productivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Solo puede comercializarse mediante distribución intensiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se adquiere principalmente por impulso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los productos industriales apoyan procesos de producción o prestación de servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'El objetivo principal de la distribución comercial consiste en:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de intermediarios en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar que el producto llegue al cliente en las condiciones adecuadas de lugar y tiempo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar campañas publicitarias para aumentar las ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer políticas de producción para la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La distribución comercial busca que los productos estén disponibles para el cliente mediante una adecuada cobertura del mercado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'La utilidad de tiempo en la distribución comercial permite que:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El cliente encuentre el producto cuando lo necesita.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El producto tenga un diseño más atractivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La empresa reduzca los costos de fabricación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los intermediarios incrementen sus márgenes de utilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La utilidad de tiempo garantiza la disponibilidad del producto en el momento requerido por el consumidor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes características corresponde a la distribución selectiva?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar el mayor número posible de puntos de venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comercializar únicamente mediante tiendas virtuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Seleccionar un número limitado de intermediarios para comercializar el producto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la participación de intermediarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La distribución selectiva permite mantener mayor control sobre la comercialización del producto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Una organización que busca ofrecer sus productos en la mayor cantidad posible de establecimientos comerciales aplica una estrategia de distribución:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Selectiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Intensiva.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Corporativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La distribución intensiva busca alcanzar una amplia cobertura del mercado mediante múltiples puntos de venta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La selección del canal de distribución debe realizarse principalmente considerando:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color de la imagen corporativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las condiciones del mercado, el tipo de producto y el cliente objetivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los gustos personales del administrador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las características del mercado, del producto y la capacidad logística de la organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'La selección del canal depende de las condiciones del mercado, del producto y de la capacidad de la organización para distribuirlo eficientemente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué afirmación describe correctamente la distribución exclusiva?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Busca comercializar el producto mediante todos los intermediarios disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Limita la comercialización a uno o pocos intermediarios autorizados para fortalecer el posicionamiento de la marca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se utiliza únicamente para productos de consumo inmediato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Su objetivo principal es reducir el número de consumidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La distribución exclusiva restringe la comercialización a pocos intermediarios para mantener mayor control y fortalecer el posicionamiento del producto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: 'Un canal de distribución cumple la función de:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar campañas publicitarias para los productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar el traslado del producto desde el productor hasta el consumidor final.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Determinar el precio de venta al consumidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar estudios financieros de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los canales de distribución permiten que los productos lleguen al consumidor de manera eficiente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'En un canal indirecto largo participan generalmente:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Productor y consumidor únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Productor, mayorista, minorista y consumidor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Productor y agente comercial únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Minorista y consumidor exclusivamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El canal indirecto largo incorpora varios intermediarios antes de llegar al consumidor final.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de los siguientes actores adquiere grandes volúmenes de productos para abastecer a otros intermediarios?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agente comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Minorista.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Distribuidor exclusivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mayorista.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El mayorista compra grandes volúmenes para abastecer a minoristas u otras empresas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El intermediario que vende directamente al consumidor final corresponde al:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Minorista.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mayorista.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Agente comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Distribuidor industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El minorista comercializa los productos directamente con el consumidor final.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'La principal función de un agente o corredor consiste en:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprar mercancías para revenderlas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar la negociación entre comprador y vendedor sin adquirir la propiedad del producto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fabricar productos para el mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar el inventario del consumidor final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El agente o corredor actúa como facilitador de la negociación comercial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'Los acuerdos comerciales tienen como propósito principal:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de intermediarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Regular las condiciones y responsabilidades entre las partes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir los canales de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la competencia del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los acuerdos comerciales establecen condiciones para desarrollar relaciones comerciales organizadas y eficientes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de los siguientes acuerdos concede a un intermediario el derecho exclusivo para comercializar un producto en una zona determinada?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acuerdo de suministro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Acuerdo de franquicia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acuerdo de exclusividad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Acuerdo de promoción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El acuerdo de exclusividad limita la comercialización a un intermediario autorizado en un territorio específico.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: 'Una de las funciones de los acuerdos comerciales es:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar los costos logísticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Coordinar las actividades comerciales y logísticas entre las partes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la participación de intermediarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir las estrategias de distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los acuerdos comerciales facilitan la coordinación de las actividades necesarias para la distribución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'Los formatos comerciales permiten a las organizaciones:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Seleccionar la forma más adecuada para comercializar sus productos según el mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Determinar la estructura organizacional de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir los canales de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer los costos de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los formatos comerciales facilitan la comercialización de acuerdo con las características del mercado y del consumidor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La adecuada planeación de la distribución comercial contribuye principalmente a:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de proveedores de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir únicamente los costos de publicidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mejorar la disponibilidad del producto y la satisfacción del cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituir los procesos de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Una adecuada planeación de la distribución favorece la cobertura del mercado, la disponibilidad de los productos y la satisfacción del cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
    },
  }),
}
</script>

<style lang="sass"></style>
