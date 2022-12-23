<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row 
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p.mb-0(data-aos="fade-up") De acuerdo con las estadísticas dadas por la Federación de Aseguradores Colombianos, en Colombia, para el año 2021, se registraron 513.857 accidentes de trabajo, 42.646 enfermedades laborales, 608 muertes por causa laboral y 455 pensiones por invalidez. Cifras preocupantes y alarmantes, que inducen a las empresas y al gobierno a buscar medidas que permitan reducir las tasas de accidentalidad y desarrollo de enfermedades laborales, a través de Sistemas de Gestión de Seguridad y Salud en el Trabajo (SG-SST). Estimado aprendiz, lo invitamos a observar el siguiente video que le permitirá contextualizar el alcance del componente:
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/intro1.png" data-aos="fade-left")

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UB3KeVKsAxY" title="Identificación de peligros" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
