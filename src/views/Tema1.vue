<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Identificación de peligros
    
    .row 
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/1.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Toda actividad laboral tiene asociados consigo unos peligros, los cuales ponen en riesgo la integridad de los trabajadores con relación a la seguridad y salud, generando como consecuencia enfermedades y accidentes de      trabajo. Estas consecuencias causan daño en las personas, los procesos o en la propiedad; se traducen en una pérdida, ya sea de un trabajador o económica. Lo que quiere decir que impactaría negativamente la productividad de la empresa, teniendo en cuenta que afecta la continuidad operativa, tal como se evidencia en la siguiente figura.
    
    .cont_1_1.mt-5.pt-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 1.
        span Proceso de identificación de peligros
      figure.mt-4
        img.d-none.d-lg-block(src="@/assets/curso/tema1/3.svg" data-aos="zoom-in-up")
        img.d-block.d-lg-none(src="@/assets/curso/tema1/4.svg" data-aos="zoom-in-up")
    
    br
    .titulo-segundo.mt-5
      h2#t_1_1 1.1  Acto inseguro 
    
    p(data-aos="fade-up") Es toda aquella acción y comportamiento del  trabajador que  pone en riesgo su bienestar y/o el de sus compañeros. Por ejemplo, omitir una norma, malas prácticas, abuso de confianza, no uso de los EPP, como se muestra en la siguiente figura 2.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 2.
      span Normas
    
    .row.mt-5
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.p-4.cont_tarjeta1(style="background-color:#FFF4D3;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema1/5.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.mb-0(data-aos="fade-up") #[strong Manipular corriente sin guantes.]
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.p-4.cont_tarjeta1(style="background-color:#FFF4D3;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema1/6.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.mb-0(data-aos="fade-up") #[strong Subir sin protección anticaída.]
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.p-4.cont_tarjeta1(style="background-color:#FFF4D3;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema1/7.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.mb-0(data-aos="fade-up") #[strong Trabajar en altura sin protección.]
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.p-4.cont_tarjeta1(style="background-color:#FFF4D3;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema1/8.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.mb-0(data-aos="fade-up") #[strong Manipular animales sin protección.]
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_2 1.2  Condición insegura
    
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Es el entorno laboral, con características físicas y/o ambientales, en el que se desarrollan las actividades laborales, pero que no cumple con las condiciones óptimas para el desarrollo de estas o son inseguras; por lo tanto, expone al trabajador a un riesgo de sufrir un accidente o desarrollar una enfermedad. Por ejemplo, herramientas en mal estado, iluminación inadecuada para la actividad, equipos defectuosos.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/9.png" data-aos="fade-left")

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 3.
      span Condiciones inseguras
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100(style="background: rgb(255,250,237);background: linear-gradient(0deg, rgba(255,250,237,1) 80%, rgba(255,255,255,0) 80%);")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/tema1/10.svg" data-aos="zoom-in-up" style="max-width: 300px;height:250px;")
          .p-4.mt-4.text-center(style="background-color:#BFEFDD;border-bottom-left-radius:15px;border-bottom-right-radius:15px;")
            p.mb-0(data-aos="fade-up") Trabajo en altura
      .col-lg.mb-4.mb-lg-0
        .h-100(style="background: rgb(255,250,237);background: linear-gradient(0deg, rgba(255,250,237,1) 80%, rgba(255,255,255,0) 80%);")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/tema1/11.svg" data-aos="zoom-in-up" style="max-width: 300px;height:250px;")
          .p-4.mt-4.text-center(style="background-color:#BFEFDD;border-bottom-left-radius:15px;border-bottom-right-radius:15px;")
            p.mb-0(data-aos="fade-up") Transporte de sustancias químicas
      .col-lg.mb-4.mb-lg-0
        .h-100(style="background: rgb(255,250,237);background: linear-gradient(0deg, rgba(255,250,237,1) 80%, rgba(255,255,255,0) 80%);")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/tema1/12.svg" data-aos="zoom-in-up" style="max-width: 300px;height:250px;")
          .p-4.mt-4.text-center(style="background-color:#BFEFDD;border-bottom-left-radius:15px;border-bottom-right-radius:15px;")
            p.mb-0(data-aos="fade-up") Emisiones contaminantes
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_3 1.3  Consecuencia
    
    .row.cont_1_2
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/14.png" data-aos="fade-right")
      .col-lg-7(style="place-self:center;")
        p(data-aos="fade-up") Resultado negativo que se tiene luego de la materialización de un evento, el cual puede estar relacionado con la salud de los trabajadores, así como con los procesos o la propiedad.
        .titulo-sexto.color-acento-contenido.mt-4
          h5 Figura 4.
          span Consecuencias de condiciones inseguras
        .row.mt-5
          .col-lg
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/15.svg' style="z-index:2;max-width:60px;")
              .tarjeta(style="background-color:#FFF5C5;")
                .p-3
                  p.mb-0(data-aos="fade-up") #[strong Caídas]
          .col-lg
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/16.svg' style="z-index:2;max-width:60px;")
              .tarjeta(style="background-color:#FFF5C5;")
                .p-3
                  p.mb-0(data-aos="fade-up") #[strong Desarrollo de patologías]
          .col-lg
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/17.svg' style="z-index:2;max-width:60px;")
              .tarjeta(style="background-color:#FFF5C5;")
                .p-3
                  p.mb-0(data-aos="fade-up") #[strong Fracturas]
        .row
          .col-lg
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/15.svg' style="z-index:2;max-width:60px;")
              .tarjeta(style="background-color:#FFF5C5;")
                .p-3
                  p.mb-0(data-aos="fade-up") #[strong Pérdida en la infraestructura]
          .col-lg
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/17.svg' style="z-index:2;max-width:60px;")
              .tarjeta(style="background-color:#FFF5C5;")
                .p-3
                  p.mb-0(data-aos="fade-up") #[strong Bajas en la productividad]
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_4 1.4	Procesos productivos
    
    .row
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Son todos aquellos procesos y procedimientos que se deben realizar en una empresa a fin de garantizar el cumplimiento de sus metas, las cuales pueden ser bienes o servicios. Dentro de estos, se tiene, para el caso de las empresas de producción, transformación de la materia prima en productos, y para el caso de empresas de servicios, se muestran ideas para el impacto en el mercado. Independientemente de cuáles sean los procesos de la empresa, estos se realizan con el objetivo de satisfacer las necesidades del mercado mostrados a partir de la demanda, por medio de los diferentes tipos de procesos: en serie: producción de productos estandarizados con características homogéneas; bajo pedido: de acuerdo con las características específicas del cliente; por lote: número determinado de productos con características semejantes (Quiroa, 2019).
        p.mt-4(data-aos="fade-up") Dentro de las etapas de los procesos productivos, se encuentra la adquisición de materia prima, diseño con base en las necesidades (demanda), transformación de los materiales y producto final. Los procesos productivos se encuentran de acuerdo con los sectores económicos de la empresa. En Colombia, se encuentran tres sectores:
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/20.png" data-aos="fade-left")
    
    .row.mt-5
      .col-lg.mb-lg-0.mb-4
        .h-100.p-4.cont_tarjeta1(style="background-color:#FFF4D3;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema1/21.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.mb-0(data-aos="fade-up") #[strong Primario]
          p.mt-3(data-aos="fade-up") En este sector, se realizan las actividades que están relacionadas con la explotación de la tierra, y sus productos se comercializan tal cual como se extraen. Se encuentran el pesquero, el minero, la caza y la silvicultura.
      .col-lg.mb-lg-0.mb-4
        .h-100.p-4.cont_tarjeta1(style="background-color:#FFF4D3;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema1/22.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.mb-0(data-aos="fade-up") #[strong Secundario]
          p.mt-3(data-aos="fade-up") En este sector, se tienen las actividades que transforman los productos, generalmente los obtenidos en el sector primario. Se encuentra la producción de materiales procesados, alimentos, plásticos y textiles, entre otros.
      .col-lg.mb-lg-0.mb-4
        .h-100.p-4.cont_tarjeta1(style="background-color:#FFF4D3;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema1/23.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.mb-0(data-aos="fade-up") #[strong Terciario]
          p.mt-3(data-aos="fade-up") En este sector, se encuentran todos los productos intangibles, es decir, el sector de prestación de servicios. Por ejemplo, comercio, transporte, educación, salud, entre otros. 
    
    p.mt-5(data-aos="fade-up") Es así como, de los procesos productivos, surgen las actividades económicas, que, de acuerdo con Beker y Mochon (2000), son todas aquellas formas mediante las que se produce, se intermedia o se vende un bien o servicio destinado a satisfacer una necesidad o deseo. Es decir, actividad económica es cualquier actividad cuyo objetivo sea cubrir una necesidad o deseo.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 5.
      span Proceso productivo
    
    .mt-4.col-lg-10.col-xl-8.m-auto
      figure
        img(src="@/assets/curso/tema1/24.svg" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="fade-up") Toda producción, ya sea de un bien o un servicio, surge de un proceso, que se refiere a una serie de actividades que se relacionan entre sí, con el objetivo de transformar elementos de entrada en productos o servicios (resultados). Dentro del proceso, se identifican las actividades rutinarias y las no rutinarias:
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4(style="background-color:#FFE9A6;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema1/25.png" data-aos="zoom-in-up")
          h4.mt-4(data-aos="fade-up") Actividad rutinaria
          p.mt-3(data-aos="fade-up") Es aquella que forma parte de las operaciones de la empresa, se encuentra planificada y estandarizada dentro de los procesos de la empresa.
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4(style="background-color:#FCC98F;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema1/26.png" data-aos="zoom-in-up")
          h4.mt-4(data-aos="fade-up") Actividad no rutinaria
          p.mt-3(data-aos="fade-up") Aquella que no hace parte de las operaciones básicas de la empresa, no se encuentra establecida dentro de los procesos o estandarizada. 
     

   




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
    indicadorTarjetas: true,
    mostrarIndicador: true,
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
<style lang="sass">
.cont_1_1 *, .cont_1_1
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  top: 0
  left: -15%
  background: url(../assets/curso/tema1/2.png)
  background-size: cover
  background-position: bottom
  background-repeat: no-repeat
.cont_1_2 *, .cont_1_2
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 100%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/13.png)
  background-size: cover
  background-position: bottom
  background-repeat: no-repeat
.cont_tarjeta1:hover
  background-color: #DADFF3 !important
</style>
