<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Peligro
    
    p(data-aos="fade-up") En palabras de Robledo (2013), el peligro se define como el elemento, condición o acción con potencial de causar daño a la seguridad y salud de las personas, de la propiedad o del medio ambiente, o una combinación de estas.

    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100(style="background: rgb(255,250,237);background: linear-gradient(0deg, rgba(255,250,237,1) 80%, rgba(255,255,255,0) 80%);")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/tema2/1.svg" data-aos="zoom-in-up" style="max-width: 300px;height:250px;")
          .p-4.mt-4.text-center(style="background-color:#BFEFDD;border-bottom-left-radius:15px;border-bottom-right-radius:15px;")
            p.mb-0(data-aos="fade-up") #[strong ELEMENTO]
      .col-lg.mb-4.mb-lg-0
        .h-100(style="background: rgb(255,250,237);background: linear-gradient(0deg, rgba(255,250,237,1) 80%, rgba(255,255,255,0) 80%);")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/tema2/2.svg" data-aos="zoom-in-up" style="max-width: 300px;height:250px;")
          .p-4.mt-4.text-center(style="background-color:#BFEFDD;border-bottom-left-radius:15px;border-bottom-right-radius:15px;")
            p.mb-0(data-aos="fade-up") #[strong CONDICIÓN]
      .col-lg.mb-4.mb-lg-0
        .h-100(style="background: rgb(255,250,237);background: linear-gradient(0deg, rgba(255,250,237,1) 80%, rgba(255,255,255,0) 80%);")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/tema2/3.svg" data-aos="zoom-in-up" style="max-width: 300px;height:250px;")
          .p-4.mt-4.text-center(style="background-color:#BFEFDD;border-bottom-left-radius:15px;border-bottom-right-radius:15px;")
            p.mb-0(data-aos="fade-up") #[strong ACTO]
    
    br
    br
    .titulo-segundo.mt-5
      h2#t_2_1 2.1	Clasificación, consecuencias y normatividad asociada
    
    .row.cont_2_1
      .col-lg-10.col-lg-7.mb-4.mb-4.mb-md-0
        p.mb-0(data-aos="fade-up") Los peligros pueden ser: físicos, químicos, psicosociales, biomecánicos, biológicos, eléctricos, locativos, públicos, naturales, mecánicos y de seguridad. A continuación se precisan las características de algunos de ellos.
      .col-lg-2.col-md-5
        figure
          img(src="@/assets/curso/tema2/4.svg" data-aos="fade-left" style="max-width:90px;")
    
    .row.mt-5.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/5.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Peligros físicos
    
    p(data-aos="fade-up") Son aquellos que hacen parte de las condiciones ambientales en las que se desarrollan las actividades laborales. Estos se clasifican en: ruido, iluminación, vibraciones, radiaciones, temperaturas y presión atmosférica.

    .row.mt-5.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/6.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Ruido
    
    p(data-aos="fade-up") Sonido indeseable o perturbador que se encuentra presente en lugares de trabajo y que puede causar un daño en la capacidad auditiva de los trabajadores, inclusive la pérdida total del sentido del oído. A continuación, se muestran diferentes tipos de ruido, dependiendo de su intensidad:

    .row.mt-5
      .col-lg.mb-lg-0.mb-4
        .h-100.p-4.cont_tarjeta1(style="background-color:#FFF4D3;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/7.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.mb-0(data-aos="fade-up") #[strong Continuo]
          p.mt-3(data-aos="fade-up") Aquel que se produce de manera ininterrumpida durante la jornada de trabajo o el tiempo de exposición. Por ejemplo, el ruido de una maquinaria de proceso, el ruido de un aire acondicionado, o el ruido de una bomba.
      .col-lg.mb-lg-0.mb-4
        .h-100.p-4.cont_tarjeta1(style="background-color:#FFF4D3;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/8.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.mb-0(data-aos="fade-up") #[strong Intermitente]
          p.mt-3(data-aos="fade-up") Aquel que se produce con variaciones rápidas de aumento o disminución de su nivel. Por ejemplo, el que producen máquinas por ciclos o el paso de vehículos aislados (tren o avión).
      .col-lg.mb-lg-0.mb-4
        .h-100.p-4.cont_tarjeta1(style="background-color:#FFF4D3;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/9.svg" data-aos="zoom-in-up" style="max-width:100px;")
          p.mt-4.mb-0(data-aos="fade-up") #[strong De impacto]
          p.mt-3(data-aos="fade-up") Aquel que se produce por un golpe y que genera una elevación brusca en su nivel sonoro. Por ejemplo, el que produce un martillo neumático  o una prensa.
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/10.svg" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") De acuerdo con el Decreto 676 de 2020 del Ministerio de Trabajo, en la clasificación de  enfermedades laborales, las consecuencias que puede tener un trabajador por encontrarse expuesto a ruidos son:
        ul.lista-ul.mt-3
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Pérdida de la audición.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Condiciones auditivas anormales: alteración temporal del umbral auditivo, compromiso de la capacidad auditiva e hipoacusia.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Hipertensión arterial.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Síndrome de la ruptura traumática del tímpano.
    
    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Dentro de las normas legales asociadas a las condiciones ambientales relacionadas con el ruido, se encuentran:
        ul.fa-ul.mt-3
          li.mb-2(data-aos="fade-up")
            i.fa-li.fas.fa-check-circle(style="color:#465FC4;")
            | #[strong ISO 9612:2009] Evaluación de ruido ocupacional.
          li.mb-2(data-aos="fade-up")
            i.fa-li.fas.fa-check-circle(style="color:#465FC4;")
            | #[strong ISO 11904-1 2002 u 11904-2 2005] Casos especiales como call centers.
          li.mb-2(data-aos="fade-up")
            i.fa-li.fas.fa-check-circle(style="color:#465FC4;")
            | Resolución 2400 de 1979, Título 3 Capítulo 4.
          li.mb-2(data-aos="fade-up")
            i.fa-li.fas.fa-check-circle(style="color:#465FC4;")
            | Resolución 0627 de 2006.
          li(data-aos="fade-up")
            i.fa-li.fas.fa-check-circle(style="color:#465FC4;")
            | Resolución 2844 de 2007: Límite permisible para ruido continuo.
          li.mb-3(data-aos="fade-up")
            .tabla-a.color-acento-botones.mt-3
              table
                tbody
                  tr
                    td.text-center(style="border-color:#F9931F;background-color:#FFF4D3;width:20%;") #[strong HORAS/DÍAS]
                    td.text-center(style="border-color:#F9931F;width:10%;") 16
                    td.text-center(style="border-color:#F9931F;width:10%;") 8
                    td.text-center(style="border-color:#F9931F;width:10%;") 4
                    td.text-center(style="border-color:#F9931F;width:10%;") 2
                    td.text-center(style="border-color:#F9931F;width:10%;") 1
                    td.text-center(style="border-color:#F9931F;width:10%;") 0,5
                    td.text-center(style="border-color:#F9931F;width:10%;") 0,25
                    td.text-center(style="border-color:#F9931F;width:10%;") 0,125
                  tr
                    td.text-center(style="border-color:#F9931F;background-color:#FFF4D3;") #[strong dB]
                    td.text-center(style="border-color:#F9931F;") 90
                    td.text-center(style="border-color:#F9931F;") 95
                    td.text-center(style="border-color:#F9931F;") 100
                    td.text-center(style="border-color:#F9931F;") 105
                    td.text-center(style="border-color:#F9931F;") 110
                    td.text-center(style="border-color:#F9931F;") 
                    td.text-center(style="border-color:#F9931F;") 
                    td.text-center(style="border-color:#F9931F;")
          li(data-aos="fade-up")
            i.fa-li.fas.fa-check-circle(style="color:#465FC4;")
            | Resolución 8321 de 1983: Límite permisible para ruido de impacto.
          li.mb-3(data-aos="fade-up")
            .tabla-a.color-acento-botones.mt-3
              table
                tbody
                  tr
                    td.text-center(style="border-color:#F9931F;background-color:#FFF4D3;") #[strong NIVEL PICO #[br] dB]
                    td.text-center(style="border-color:#F9931F;") 140
                    td.text-center(style="border-color:#F9931F;") 130
                    td.text-center(style="border-color:#F9931F;") 120
                  tr
                    td.text-center(style="border-color:#F9931F;background-color:#FFF4D3;") #[strong No DE IMPACTOS #[br] DIA]
                    td.text-center(style="border-color:#F9931F;") 100
                    td.text-center(style="border-color:#F9931F;") 1000
                    td.text-center(style="border-color:#F9931F;") 10000
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/11.png" data-aos="fade-left")
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/12.png" data-aos="fade-left")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Las mediciones en este tipo de peligro se realizan a través de dispositivos como sonómetros y dosímetros. El primero se usa para realizar mediciones en el ambiente laboral a modo general, es decir, la cantidad de ruido que se tiene en un espacio específico del lugar de trabajo; mientras que el segundo mide la cantidad de ruido que recibe una persona dentro de su jornada laboral completa. Lo que quiere decir que con estas mediciones se tienen dosis recibidas en los ambientes de trabajo, lo cual ayuda en la determinación de las medidas de intervención que se deben tener en cuenta en los lugares de trabajo, es decir, la forma en la que se debe actuar para evitar el desarrollo de enfermedades en los trabajadores.
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") En este sentido, para realizar mediciones adecuadas en los lugares de trabajo, se debe tener en cuenta lo siguiente:
        ul.lista-ul.mt-3
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Previamente, realizar un análisis de las posibles causas que lo originan y cuáles son los focos de ruido.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Tener un detalle de la maquinaria utilizada durante los procesos de la empresa.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Realizar las mediciones bajo las mismas condiciones en las que los trabajadores desempeñan sus labores.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Cantidad de trabajadores expuestos.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Controles existentes (EPP, seguimiento con audiometrías, cerramientos acústicos, control administrativo).
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Identificar el tipo de ruido a medir.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/13.png" data-aos="fade-right")
    
    p.mt-5(data-aos="fade-up") Al identificar el tipo de ruido a medir, es importante tener claridad en tres aspectos claves: el impacto y si este es continuo o intermitente, como se describe a continuación:

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/14.svg" data-aos="fade-left")
      .col-lg-8(style="place-self:center;")
        .row.m-0(style="background-color:#FFF4D3;border-radius:25px;")
          .col-lg-3.col-md-4.p-0
            .h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="border-radius:25px;background-color:#FFDD7A;box-shadow:0px 0px 10px rgba(0,0,0,.17);")
              p.mb-0(data-aos="fade-up") #[strong Impacto]
          .col-lg-9.col-md-8
            .h-100.d-flex.align-items-center.ps-4.pt-3.pb-3
              p.mb-0(data-aos="fade-up") Se realiza la medición durante el pico del ruido.
        .row.m-0.mt-4(style="background-color:#FFF4D3;border-radius:25px;")
          .col-lg-3.col-md-4.p-0
            .h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="border-radius:25px;background-color:#FFDD7A;box-shadow:0px 0px 10px rgba(0,0,0,.17);")
              p.mb-0(data-aos="fade-up") #[strong Continuo]
          .col-lg-9.col-md-8
            .h-100.d-flex.align-items-center.ps-4.pt-3.pb-3
              p.mb-0(data-aos="fade-up")  Se realizarán cinco mediciones de 15 segundos cada una; se calcula el promedio de estas y se obtiene el nivel equivalente del periodo.
        .row.m-0.mt-4(style="background-color:#FFF4D3;border-radius:25px;")
          .col-lg-3.col-md-4.p-0
            .h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="border-radius:25px;background-color:#FFDD7A;box-shadow:0px 0px 10px rgba(0,0,0,.17);")
              p.mb-0(data-aos="fade-up") #[strong Intermitente]
          .col-lg-9.col-md-8
            .h-100.d-flex.align-items-center.ps-4.pt-3.pb-3
              p.mb-0(data-aos="fade-up")  Tomar dos mediciones diferentes y por separado. Si la diferencia de estas mediciones, entre los valores máximos y mínimos, es menor o igual a 2dB, no se requiere tomar medidas nuevamente; de lo contrario, se deben realizar cinco mediciones.
    
    .row.mt-5.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/6.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") iluminación
    
    p(data-aos="fade-up") Referida a la cantidad de luz que se requiere en el lugar de trabajo para el desarrollo de una actividad.
    p.mt-4(data-aos="fade-up") Dentro de los tipos de iluminación, se pueden identificar los que se presentan a continuación: 
    
    .col-xl-10.m-auto.mt-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        .row.col-lg-11.m-auto(titulo="General")
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            p Tipo de iluminación con una distribución uniforme en el área en la que se requiere esté alumbrado. Por ejemplo, oficinas, aulas de clase, planta de una empresa.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/15.png")
        .row.col-lg-11.m-auto(titulo="General localizada")
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            p Tipo de iluminación en la que no se requiere alumbrado en la totalidad del área, sino en un sector específico. Por ejemplo, máquinas en serie y pasillos.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/16.png")
        .row.col-lg-11.m-auto(titulo="Individual")
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            p Tipo de iluminación en un punto específico, teniendo en cuenta la tarea a realizar. Por ejemplo, el  puesto de un técnico de relojes, luz para un odontólogo.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/17.png")
        .row.col-lg-11.m-auto(titulo="Suplementario")
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            p Tipo de iluminación usado en algunas áreas con la intención de resaltar aspectos, objetos o características específicas del lugar. Por ejemplo, un almacén en las vitrinas, publicidades, anuncios.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/18.png")
        .row.col-lg-11.m-auto(titulo="Combinada")
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            p Cuando se tienen dos o más tipos de iluminación en un área de trabajo, teniendo en cuenta las actividades a realizar. Por ejemplo, un quirófano, un taller de modistería.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/19.png")
    
    p.mt-5(data-aos="fade-up") En este sentido, es importante reconocer las consecuencias de una mala iluminación:

    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4(style="background-color:#DADFF3;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/20.png" data-aos="zoom-in-up")
          h4.mt-4(data-aos="fade-up") En el trabajador
          p.mt-3(data-aos="fade-up") Pérdida de la capacidad visual, fatiga ocular, aumento de accidentes, afectación en el bienestar psíquico de los trabajadores.
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4(style="background-color:#A2AEE1;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/21.png" data-aos="zoom-in-up")
          h4.mt-4(data-aos="fade-up") En la empresa
          p.mt-3(data-aos="fade-up") Disminución en la productividad, desmejora de la calidad de los productos, aumenta el número de errores, aumenta el ausentismo, desaprovechamiento de los espacios de trabajo.
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") De acuerdo con lo anterior, en cuanto a temas de iluminación, las normas legales asociadas a estas condiciones ambientales son: 
        ul.lista-ul.mt-3
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | RETILAP (Reglamento Técnico de Iluminación y Alumbrado Público) Resolución 40122 de 2016.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | RETIE (Reglamento Técnico de Instalaciones Eléctricas) Resolución 90708 de 2013.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | GTC-8 (Guía Técnica Colombiana. Electrotecnia. Principios de la ergonomía visual. Iluminación      para ambientes de trabajo en espacios cerrados. 
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Resolución 2400 de 1979 Título III, Capítulo III.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Ley 9 de 1979.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Resolución 180540 de 2010.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/22.png" data-aos="fade-left")

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/23.png" data-aos="fade-right")
      .col-lg-9(style="place-self:center;")
        p(data-aos="fade-up") Las mediciones de esta condición de trabajo se realizan con un dispositivo llamado luxómetro, el cual muestra la intensidad de la iluminación en la distribución que se tiene dentro de los lugares de trabajo, de modo que ayude con la identificación de las condiciones no óptimas para el desarrollo laboral, de tal manera que se realicen las correcciones necesarias, con el objetivo de no afectar la seguridad del trabajador, el rendimiento ni la productividad de la empresa.     
        p.mt-4(data-aos="fade-up") Para realizar las mediciones de los niveles de iluminación, se puede considerar el Método de la constante del salón K, donde se tienen en cuenta las características como el ancho del salón, el largo del salón y la distancia de las luminarias. Además, se consideran aspectos como la identificación de áreas críticas, no obstruir el espacio entre la fuente y el sensor del dispositivo, colores de la vestimenta a usar (bata azul turquí), establecer puntos y ubicación a evaluar. 

    .row.mt-5.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/6.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Vibraciones
    
    p(data-aos="fade-up") Movimiento que recibe el cuerpo de la persona por oscilaciones, y que tiene relación a una posición o punto de equilibrio, sin necesidad de realizar un desplazamiento. 
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las vibraciones se pueden recibir por equipos de transporte, maquinarias en movimiento, motores, trituración, herramientas eléctricas, herramientas neumáticas, golpes entre objetos por percusión. Y las consecuencias dependen      de la parte del cuerpo que recibe los movimientos u oscilaciones y de la cantidad de tiempo al que se encuentra expuesto.
    
    p.mt-5.text-center(data-aos="fade-up") Las consecuencias por encontrarse expuesto a estas condiciones de trabajo se muestran a continuación:

    .cont_2_2.mt-5.pt-5.pb-5
      .col-xl-10.m-auto
        SlyderA.bg-white.p-4(tipo="b" style="border-radius:25px;")
          .row
            .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema2/26.png')
            .col-lg-8(style="place-self:center;")
              h4 Segmentales
              p  Aquellas que afectan la parte del cuerpo que recibe la vibración, principalmente por causa de herramientas; es por ello que se requiere el uso de EPP contra vibraciones o antivibraciones (guantes, fajas y cinturones): 
              ul.lista-ul.mt-3
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  | Mano – Brazo: herramientas que generan vibraciones y son percibidas por esta parte del cuerpo, como taladros, pulidoras, brilladoras, sierras. 
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  | Trastornos vasculares, de huesos y articulaciones, neurológicos, musculares, de síndrome de dedo blanco o síndrome de Raynaud. 
          .row
            .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema2/27.png')
            .col-lg-8(style="place-self:center;")
              h4 Cuerpo entero
              p  Herramientas o maquinarias que generan vibraciones y son percibidas por todo el cuerpo en trabajos de pie, sentado, de cabeza o acostado, como vehículos, maquinarias. Se presentan los siguientes tipos de vibraciones: alta frecuencia, baja frecuencia y muy baja frecuencia.
          .row
            .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema2/28.png')
            .col-lg-8(style="place-self:center;")
              h4 Vibraciones de alta frecuencia
              p  Son aquellas vibraciones presentes en las maquinarias neumáticas (motosierra, pulidora, lijadora) y producen movimientos de 20 a 1000 Hz.
              ul.lista-ul.mt-3
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Artrosis del codo y articulaciones en general.
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Lesiones de la muñeca.
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Afecciones angioneuróticas. 
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Expresiones vasculares por crisis del tipo de dedos muertos, llamado Raynaud.
          .row
            .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema2/29.png')
            .col-lg-8(style="place-self:center;")
              h4 Vibraciones de baja frecuencia
              p  Son aquellas vibraciones presentes en los elementos como elevadores, vehículos industriales, obras o transporte urbano; excavadores. Produciendo movimientos de 1 a 20 Hz.
              ul.lista-ul.mt-3
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Lumbalgias
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Lumbociáticas
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Hernias 
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Agravamiento en las lesiones raquídeas
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Síntomas neurológicos: variaciones en el ritmo cerebral, alteraciones en el equilibrio
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Trastornos de visión por resonancia
          .row
            .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema2/30.png')
            .col-lg-8(style="place-self:center;")
              h4 Vibraciones de muy baja frecuencia
              p  Son aquellas vibraciones en las que se dan movimientos en vehículos de balanceo (avión, barco, tren) y producen movimientos menores a 1 Hz
              ul.lista-ul.mt-3
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Estimulación del laberinto del oído interno
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Trastorno del SNC (Sistema Nervioso Central)
                li(data-aos="fade-up")
                  i.fas.fa-check-circle(style="color:#465FC4;")
                  |  Mareos y vómitos (mareo del viajero)
    
    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") De acuerdo con las enfermedades laborales definidas por el Ministerio de Trabajo bajo Decreto 676 de 2020, las enfermedades que puede desarrollar un trabajador por encontrarse expuesto a vibraciones son:
        .mt-4.p-4(style="background-color:#E3E7F6;")
          p.mb-0(data-aos="fade-up") Síndrome de Raynaud, acrocianosis y acroparestesias, síndrome cervicobraquial, fibromatosis de la fascia palmar, trastornos específicos de tejidos blandos, enfermedad de Kienbock del adulto, dolor articular, lesiones de hombro, síndrome del manguito rotador o síndrome del supraespinoso, tendinitis, bursitis, enteropatías, epicondilitis y mialgia.
      .col-lg-3(style="place-self:center;")
        figure
          img(src='@/assets/curso/tema2/31.png' data-aos="fade-left")
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src='@/assets/curso/tema2/32.png' data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") En cuanto a las enfermedades laborales producidas por vibraciones, se contemplan en las siguientes normas legales asociadas a las condiciones ambientales:
        .row.mt-4
          .col-lg.mb-4.mb-lg-0
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/33.svg' style="z-index:2;max-width:60px;")
              .tarjeta.d-flex.align-items-center(style="background-color:#FFF5C5;")
                .p-2
                  p.mb-0(data-aos="fade-up") #[strong Resolución 2400 de 1979]
          .col-lg.mb-4.mb-lg-0
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/34.svg' style="z-index:2;max-width:60px;")
              .tarjeta.d-flex.align-items-center(style="background-color:#FFF5C5;")
                .p-2
                  p.mb-0(data-aos="fade-up") #[strong ISO 5349 Evaluación del riesgo mano-brazo]
          .col-lg.mb-4.mb-lg-0
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/35.svg' style="z-index:2;max-width:60px;")
              .tarjeta.d-flex.align-items-center(style="background-color:#FFF5C5;")
                .p-2
                  p.mb-0(data-aos="fade-up") #[strong ISO 2631 Evaluación cuerpo entero]

        p.mt-4(data-aos="fade-up") Las mediciones que se realizan a los trabajadores bajo esta condición se toman por medio de un instrumento llamado medidor de vibraciones QUEST HAVPro, compuesto por un medidor de vibraciones (recibe y almacena los datos), una almohadilla base triaxial (realiza la medición en el puesto de trabajo), cable para sensor acelerómetro (conecta la almohadilla con el medidor), cable para descarga de datos (conecta el medidor con el pc, para descargar datos y ser analizados).

    .row.mt-5.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/6.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Radiaciones
    
    p(data-aos="fade-up") Proceso en el que un cuerpo puede emitir, propagar o transferir energía por medio de ondas, las cuales le permiten desplazarse en el vacío. Existen dos tipos de radiaciones, como se muestra en el siguiente esquema.

    .titulo-sexto.color-acento-contenido.mt-5
      h5 Figura 6.
      span Tipos de radiaciones
    
    .col-xl-10.m-auto.mt-4
      figure
        img(src="@/assets/curso/tema2/36.svg" data-aos="zoom-in-up")
    
    .cont_2_3.mt-5.p-4.pt-5
      .row
        .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/38.png" data-aos="fade-right")
        .col-lg-9(style="place-self:center;")
          p(data-aos="fade-up") Las consecuencias por encontrarse expuesto a estas radiaciones varían de acuerdo con el tiempo de exposición, dosis recibida y tipo de exposición.
          p.mt-4(data-aos="fade-up") Sin embargo, lo que afecta principalmente a las personas es la dosis con valores por encima de los límites permisibles; es por ello que en las empresas se debe mantener un protocolo con las personas expuestas a estas radiaciones, a fin de garantizar una protección en los trabajadores, evitando que se afecten negativamente en su salud y puedan desarrollar enfermedades, las cuales se encuentran establecidas por el Ministerio de Trabajo bajo Decreto 676 de 2020, dentro de las cuales se tienen:
      .row.mt-5
        .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
          p(data-aos="fade-up") Neoplasia maligna de cavidad nasal y de senos paranasales, neoplasia maligna de bronquios y pulmón, neoplasia maligna de huesos y cartílagos, otras neoplasias malignas de la piel, leucemias, polineuropatia inducida, blefaritis, conjuntivitis, queratitis, cataratas, neumonitis, radiodermatitis aguda, gastroenteritis, osteonecrosis.
          p.mt-4(data-aos="fade-up") En este sentido, es importante conocer lo establecido en las normas legales asociadas a las condiciones ambientales relacionadas con las radiaciones:
          .row.mt-4.m-auto.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              .tarjeta-avatar-b.h-100
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/40.svg' style="z-index:2;max-width:60px;")
                .tarjeta.d-flex.align-items-center(style="background-color:#D5F5E9;")
                  .p-2
                    p.mb-0(data-aos="fade-up") #[strong Resolución 2400 de 1979]
            .col-lg-6
              .tarjeta-avatar-b.h-100
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/41.svg' style="z-index:2;max-width:60px;")
                .tarjeta.d-flex.align-items-center(style="background-color:#D5F5E9;")
                  .p-2
                    p.mb-0(data-aos="fade-up") #[strong Resolución 482 de 2018.]
          .row.mt-4.m-auto.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              .tarjeta-avatar-b.h-100
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema2/42.svg' style="z-index:2;max-width:60px;")
                .tarjeta.d-flex.align-items-center(style="background-color:#D5F5E9;")
                  .p-2
                    p.mb-0(data-aos="fade-up") #[strong Circular 29 de 2018.]
        .col-lg-5(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/39.svg" data-aos="fade-left")
      
      p.mt-5(data-aos="fade-up") Con respecto a los peligros asociados a las radiaciones, es importante que las empresas tengan zonas de control, en las cuales se encuentre establecido el detalle del tiempo de permanencia (limitado, reglamentado o prohibido), y zonas vigiladas, teniendo en cuenta la exposición por la cantidad de dosis a recibir. 
    
    .row.mt-5.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/6.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Temperatura
    
    .row
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/43.png" data-aos="fade-right")
      .col-lg-9(style="place-self:center;") 
        p(data-aos="fade-up") Hace referencia a las condiciones ambientales que generan un disconfort térmico en las personas. Cuando se exponen los trabajadores a temperaturas extremas, se puede provocar en ellos hipotermia, para las temperaturas bajas, o hipertermia, para las temperaturas altas.
        p.mt-4(data-aos="fade-up") Es por ello por lo que en los lugares de trabajo se debe tener control sobre las condiciones ambientales, relacionadas con la temperatura, como son: temperatura del aire, radiante o de los objetos que nos rodean, humedad y velocidad del aire; a fin de minimizar la presencia de estrés térmico, causante de generar focos de frío o calor. Por otra parte, también es importante tener en cuenta que el tipo de trabajo realizado y la ropa usada, pues influyen en el confort térmico.  Se considera que una temperatura óptima es de 18 °C. A continuación, se presentan algunas características de la temperatura y su afectación al ser humano:
    
    .row.mt-5.indicador__container(style="position:relative")
      .col-lg-6.mb-5.mb-lg-0(style="position:relative")
        figure.container__tarjetas(data-aos="zoom-in-up" @mouseover="indicadorTarjetas = false" style="position:relative;overflow:hidden;border-radius:15px;")
          .indicador--hover(v-if="indicadorTarjetas")
          img(src="@/assets/curso/tema2/44.png")
          .contenido__tarjetas.pt-3.pb-2.ps-4.pe-4.text-center
            h4 Temperaturas altas
            p.mt-4 De acuerdo con lo establecido en el Decreto 676 de 2020, cuando se considera que un trabajador realiza tareas con temperaturas elevadas, generadas por hornos de altas temperaturas o cuerpos incandescentes, deberán existir aislamientos de las fuentes de calor, teniendo en cuenta medios naturales y artificiales, lugares de hidratación y espacios de climatización, con el fin de evitar los cambios bruscos de temperatura; EPP adecuados, a fin de colocar barreras contra las radiaciones emitidas por las fuentes de calor; cambios de relevos periódicos o pausas de los trabajadores. 
      .col-lg-6.mb-5.mb-lg-0
        figure.container__tarjetas(data-aos="zoom-in-up" @mouseover="indicadorTarjetas = false" style="position:relative;overflow:hidden;border-radius:15px;")
          img(src="@/assets/curso/tema2/45.png")
          .contenido__tarjetas.pt-3.pb-2.ps-4.pe-4.text-center
            h4 3 maneras de perder calor corporal
            p.mt-4 #[strong Convención], ocurre cuando hay traslado de calor, es decir, cuando la temperatura ambiente es mayor a la del cuerpo; #[strong radiación], ocurre cuando hay pérdida de calor, es decir, cuando el cuerpo absorbe el calor del ambiente, por ejemplo, cuando se encuentra expuesto al sol, cuando se encuentra en contacto con un horno o fluido caliente; y por #[strong evaporación], ocurre cuando se da el proceso de transpiración o sudor, se evapora a través de la piel.
    
    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/46.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-left") Teniendo en cuenta lo anterior, es importante considerar los límites óptimos para el desarrollo de trabajo, lo que nos quiere decir que una temperatura ambiente óptima es la que se encuentra entre 19 y 24 °C, en condiciones de humedad relativa entre 40 y 70 %.
    
    p.mt-5(data-aos="fade-up") Las temperaturas extremas también generan consecuencias, entre las que  se puede encontrar:

    .col-xl-10.m-auto.mt-5
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
        .row.col-lg-11.m-auto(titulo="Temperaturas altas")
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            p Cuando la temperatura corporal supera 37 °C, pérdida de fuerza, mareos, deshidratación, golpe de calor (temperatura mayor a 40 °C). Generando enfermedades como:
            ul.lista-ul.mt-3
              li(data-aos="fade-up")
                i.fas.fa-check-circle(style="color:#465FC4;")
                |  Golpe de calor e insolación, síncope por calor, calambre por calor, Urticaria por calor, pérdida de electrolitos. 
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/47.png")
        .row.col-lg-11.m-auto(titulo="Temperaturas bajas")
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            p Cuando la temperatura corporal es inferior a 35 °C, malestar general, coordinación en partes de cuerpo, entumecimiento en las manos, hasta la muerte (cuando la temperatura corporal desciende por debajo de los 28 °C) por exposiciones a temperaturas muy bajas [hipotermia]).
            p.mt-4 La exposición a esta temperatura genera enfermedades como las establecidas por el Ministerio de Trabajo bajo Decreto 676 de 2020: 	
            ul.lista-ul.mt-3
              li
                i.fas.fa-check-circle(style="color:#465FC4;")
                |  Urticaria por frío, leucodermia, congelamiento superficial, hipotermia, congelamiento por necrosis de tejidos.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema2/48.png")
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") En cuanto a la temperatura, está regulada a través de las siguientes normas legales asociadas a las condiciones ambientales relacionadas con las temperaturas extremas:
        ul.lista-ul.mt-4
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Resolución 2400 de 1979.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Ley 9 de 1979.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Decreto 1281 de 1994.
        p.mt-4(data-aos="fade-up") Para las mediciones de las condiciones de trabajo con exposición a temperaturas extremas, se utiliza un dispositivo llamado termómetro, este determina los niveles de confort o estrés térmico en los lugares de trabajo. El dispositivo cuenta con tres sensores: 
        ul.lista-ul.mt-4
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Termómetro de bulbo húmedo (TBH=WB): muestra la humedad relativa. 
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Globo (TG=G): muestra el calor radiante.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Termómetro de bulbo seco (TBS=DB): muestra la temperatura ambiente. 
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/49.png" data-aos="fade-left")
    
    p.mt-5(data-aos="fade-up") Las mediciones de las temperaturas señaladas se realizan con el objetivo de determinar los factores que se correlacionan e influyen en las condiciones ambientales y los gastos energéticos de los trabajadores. 

    .row.mt-5.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/6.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Presión atmosférica
    
    p(data-aos="fade-up") Es la fuerza que ejerce el aire sobre la superficie de la tierra. Se considera que una persona realiza trabajos a diferentes presiones, por ejemplo: 
    
    TabsA.color-acento-botones.mt-4
      .tarjeta.color-primario.p-4(titulo="Altas presiones")
        h4 Altas presiones
        p Se producen cuando se baja a profundidades en el agua superiores a los 10 metros. Por ejemplo, los buzos. 
        p Cuando un cuerpo se somete a cambios en la presión, ocasiona una expansión del aire que se tiene en el cuerpo y este afecta órganos como los oídos, las fosas nasales y los pulmones, ocasionando de esta manera la alteración en la presión arterial y problemas en los glóbulos rojos por una hiperventilación que acelera el ritmo cardiaco y el flujo de la sangre. 
      .tarjeta.color-acento-botones.p-4(titulo="Bajas presiones")
        h4 Bajas presiones
        p Se originan cuando la persona se encuentra en sitios con altitudes. Por ejemplo, cuando se encuentra en vehículos sin sistemas de presurizado (resguardar, en un cierto ámbito, las condiciones normales de presión atmosférica). Esto ocasiona una contracción en los pulmones y puede deteriorar la salud de las personas por la disminución del oxígeno.
    
    p.mt-5(data-aos="fade-up") En este sentido y continuando con las enfermedades laborales definidas por el Ministerio de Trabajo bajo Decreto 676 de 2020, las enfermedades que puede desarrollar un trabajador por encontrarse expuesto a presiones atmosféricas son:

    .col-xl-10.m-auto.mt-5.row
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.text-center.p-4.cont_tarjeta_oreja(style="background-color:#DADFF3;border-radius:15px;")
          figure.d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/tema2/50.svg" style="max-width:90px;" data-aos="zoom-in-up")
          p.mt-4(data-aos="fade-up") #[strong Síndrome de perforación de la membrana timpánica]
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.text-center.p-4.cont_tarjeta_oreja(style="background-color:#DADFF3;border-radius:15px;")
          figure.d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/tema2/51.svg" style="max-width:90px;" data-aos="zoom-in-up")
          p.mt-4(data-aos="fade-up") #[strong Síndrome de perforación de la membrana timpánica]
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.text-center.p-4.cont_tarjeta_oreja(style="background-color:#DADFF3;border-radius:15px;")
          figure.d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/tema2/52.svg" style="max-width:90px;" data-aos="zoom-in-up")
          p.mt-4(data-aos="fade-up") #[strong Laberintitis, otalgia y secreción auditiva]
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.text-center.p-4.cont_tarjeta_oreja(style="background-color:#DADFF3;border-radius:15px;")
          figure.d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/tema2/53.svg" style="max-width:90px;" data-aos="zoom-in-up")
          p.mt-4(data-aos="fade-up") #[strong Otros trastornos específicos del oído]
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.text-center.p-4.cont_tarjeta_oreja(style="background-color:#DADFF3;border-radius:15px;")
          figure.d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/tema2/54.svg" style="max-width:90px;" data-aos="zoom-in-up")
          p.mt-4(data-aos="fade-up") #[strong Sinusitis u otitis ocasionada por barotrauma.]
    
    p.mt-5(data-aos="fade-up") Reconocidas las enfermedades ocasionadas por la presión atmosférica, de acuerdo con las normas legales asociadas a las condiciones ambientales relacionadas puntualmente con las temperaturas extremas, una vez identificadas las condiciones de trabajo con las medidas exactas a las cuales se encuentran expuestos los trabajadores, se recomienda revisar las acciones a ejecutar, como lo es presurización, equipos de protección o soporte para desarrollo de la actividad, exámenes periódicos, entrenamiento para desarrollo de actividades y respuesta ante emergencias.

    .row.mt-5.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/5.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Peligros químicos
    
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/55.png" data-aos="fade-right")
      .col-lg-8(style="pplace-self:center;")
        p(data-aos="fade-up") Son todas aquellas sustancias que se encuentran en el ambiente en forma de polvos, humos, gases, sólidos y líquidos, de origen orgánico o inorgánico, que, por su grado de corrosión y toxicidad, pueden afectar la salud del trabajador. 
        p.mt-4(data-aos="fade-up") Al hablar de peligros químicos, es de aclarar que el contacto con estas sustancias se puede dar por vía respiratoria, ingestión o contacto en piel. Por ejemplo: algunas sustancias pueden ser naftalina, arsénico, trinitrotolueno, derivados nitrados y aminados del benceno.
    
    p.mt-5(data-aos="fade-up") Las iconografías características, según las Naciones Unidas, para las sustancias consideradas de peligro químico son: explosivos, inflamables, comprimidos, oxidantes, tóxicos, radiactivos, corrosivos y gases comprimidos:

    .cont_2_4.mt-4.p-4
      .col-xl-6.m-auto.col-lg-10
        figure
          img(src="@/assets/curso/tema2/57.svg" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="fade-up") Algunas de las actividades laborales en las que se realizan contactos con este tipo de peligros son: generación, almacenamiento, recolección, transporte, tratamiento, disposición y segregación de sustancias químicas. Revisemos a continuación algunos elementos a tener en cuenta:

    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8ZJrCtxYFcY" title="Peligros químicos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/58.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-left") De acuerdo con las enfermedades laborales definidas por el Ministerio de Trabajo bajo Decreto 676 de 2020, las enfermedades que puede desarrollar un trabajador por encontrarse expuesto a sustancias químicas son: anemia hemolítica adquirida, síndrome de vibración de mano y brazo (enfermedad del dedo blanco), síndrome de Raynaud, bronquiolitis obliterante crónica, enfisema crónico difuso, fibrosis pulmonar crónica, neoplasia maligna de bronquios y de pulmón, dermatitis alérgica de contacto, melanodermia, neoplasia maligna de la vejiga.
    
    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/59.png" data-aos="fade-right")
      .col-lg-9(style="place-self:center;")
        p(data-aos="fade-up") De acuerdo con lo anterior, es importante identificar las normas legales asociadas al manejo y manipulación de sustancias químicas; a nivel nacional, son:
        ul.lista-ul.mt-4
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Ley 55 de 1993.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Ley 9 de 1979.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Resolución 2400 de 1979.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Resolución 773 de 2021.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Resolución 1741 de 2016.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Política de Gestión del Riesgo Asociado al Uso de Sustancias Químicas – CONPES 3868.
    
    .row.mt-5.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/5.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Peligros biológicos
    
    .row.mt-2
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Hacen parte de ellos aquellos microorganismos (virus, bacterias, hongos) y macroorganismos (animales e insectos) que pueden actuar sobre la salud de los trabajadores, generando patologías infectocontagiosas y parasitarias. 
        p.mt-4(data-aos="fade-up") Los niveles de riesgo se establecen considerando el tipo de enfermedad que se pueda generar a partir de las condiciones u organismo, la probabilidad de contagio o propagación, y el tipo de tratamiento existente. En caso de que la enfermedad sea grave, con un alto riesgo en su propagación y no se conoce un tratamiento eficaz, se considera altamente peligrosa; pero en caso de que sea poco probable el desarrollo de una patología, no existe probabilidad de propagación y no requiere tratamiento, se considera de baja peligrosidad. 
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/60.png" data-aos="fade-right")
    
    .row.cont_2_5.mt-5
      .col-lg-10.col-xl-11.col-lg-7.mb-4.mb-4.mb-md-0
        p.mb-0(data-aos="fade-up") Teniendo en cuenta las actividades productivas asociadas a este tipo de peligro, se encuentran: ganadería, agrícola, de alimentos, recolecciones, salud, reciclado, laboratorios, entre otros.
      .col-lg-2.col-xl-1.col-md-5
        figure
          img(src="@/assets/curso/tema2/61.svg" data-aos="fade-left" style="max-width:90px;")
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/62.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") De acuerdo con las enfermedades laborales definidas por el Ministerio de Trabajo bajo Decreto 676 de 2020, algunas de las enfermedades que puede desarrollar un trabajador por encontrarse expuesto a agentes biológicos son:
        .mt-4.p-4(style="background-color:#E3E7F6;")
          p.mb-0(data-aos="fade-up") Tuberculosis, dengue, fiebre amarilla, dermatofitosis, paracoccidioidomicosis malaria, neumonitis, dermatosis pápulo bisinosis, virus de la inmunodeficiencia humana, hepatitis virales.
    
    p.mt-5(data-aos="fade-up") Normas legales asociadas al manejo y manipulación de sustancias químicas:
    
    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        .row
          .col-lg.mb-4.mb-lg-0
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/63.svg' style="z-index:2;max-width:60px;")
              .tarjeta.d-flex.align-items-center(style="background-color:#FFF5C5;")
                .p-2
                  p.mb-0(data-aos="fade-up") #[strong Ley 9 de 1979.]
          .col-lg.mb-4.mb-lg-0
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/64.svg' style="z-index:2;max-width:60px;")
              .tarjeta.d-flex.align-items-center(style="background-color:#FFF5C5;")
                .p-2
                  p.mb-0(data-aos="fade-up") #[strong Decreto Ley 1295 de 1994.]
          .col-lg
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/65.svg' style="z-index:2;max-width:60px;")
              .tarjeta.d-flex.align-items-center(style="background-color:#FFF5C5;")
                .p-2
                  p.mb-0(data-aos="fade-up") #[strong Decreto 1072 de 2015.]
        p.mt-5(data-aos="fade-up") Cuando en la empresa se ha identificado que existe una exposición a este tipo de peligros, se realiza primeramente un diagnóstico de las condiciones de salud de los trabajadores; posteriormente, se consideran monitoreos biológicos, a fin de garantizar el bienestar de los trabajadores. Cuando se evidencia el desarrollo de una enfermedad, se activa el cerco epidemiológico, a fin de disminuir o controlar la probabilidad de propagación de la enfermedad y activar las medidas de acción a implementar.  
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/66.png" data-aos="fade-left")
    
    .row.mt-5.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/5.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Peligros mecánicos o de seguridad
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/67.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Son todos los elementos físicos que pueden ocasionar una lesión, por la labor mecánica de las herramientas, maquinarias, partículas en proyección en estado sólido o líquidos. Se manifiestan a través de objetos en movimiento que pueden dar lugar a un golpe, contacto con elementos y atrapamientos. 
        p.mt-4(data-aos="fade-up") Las consecuencias que puede tener un trabajador por encontrarse expuesto a estos peligros pueden ser físicas (golpes, laceraciones, fracturas, quemaduras, atrapamientos, aplastamiento, entre otras) o psicológicas, teniendo en cuenta la magnitud y el tipo de accidente en el que se vio involucrado. 

    .cont_2_6.mt-5.pt-5
      p(data-aos="fade-up") Dentro de las Normas legales asociadas al peligro mecánico o de seguridad emitidas por el Instituto Colombiano de Normas Técnicas y Certificación-ICONTEC Internacional y el Ministerio del Trabajo, se encuentran las siguientes:
      figure.col-xl-10.m-auto.mt-4
        img(src="@/assets/curso/tema2/68.svg" data-aos="zoom-in-up")

    .row.mt-5.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/5.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Peligros psicosociales
    
    .row
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Son todas aquellas condiciones laborales que afectan la parte física, emocional, cognitiva y conductual de los trabajadores, y que se encuentran relacionadas con turnos, jornadas de trabajo, autonomía, organización laboral, acoso laboral, comunicación ineficaz, manejo de horarios laborales y personales. 
        p.mt-4(data-aos="fade-up") Cuando una persona se encuentra expuesta a este tipo de peligros, puede afectar su parte psíquica y física, de igual manera, la calidad de su trabajo y los resultados obtenidos. Es un peligro que se relaciona mucho con la parte personal del trabajador, por sus emociones, carácter, experiencias, vulnerabilidad y personalidad. Lo que ocasiona que cada trabajador asimile las situaciones de diferente manera. 
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/69.png" data-aos="fade-right")
    
    p.mt-5.text-center(data-aos="fade-up") Para determinar cuál es el estado mental y psíquico de los trabajadores, se hace necesario aplicar baterías y, de esta manera, analizar las condiciones como las que se presentan a continuación:

    .cont_2_2.mt-5.pt-5.pb-5
      .col-xl-10.m-auto
        SlyderA.bg-white.p-4(tipo="b" style="border-radius:25px;")
          .row
            .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema2/70.png')
            .col-lg-8(style="place-self:center;")
              h4 Carga mental
              p  Actividades que requieren de un proceso mental y de esfuerzo a nivel racional, al punto de encontrar personas con sentimientos de saturación que las llevan a no demostrar los problemas por más sencillos que sean. Una de las condiciones que más afecta es el tiempo para ejecutar las tareas y el número de actividades simultáneas que se deben realizar.
          .row
            .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema2/71.png')
            .col-lg-8(style="place-self:center;")
              h4 Tiempo de trabajo
              p Cuando no existe una planificación de las actividades o el tiempo asignado a realizar la actividad no es suficiente para la ejecución de esta. 
          .row
            .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema2/72.png')
            .col-lg-8(style="place-self:center;")
              h4 Exigencias
              p En ocasiones, se oculta la realidad de las cosas, por temor a demostrar que no se tiene el tiempo o herramientas necesarias para desarrollar una actividad, lo que hace que la persona pierda la visión de su trabajo.
          .row
            .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema2/73.png')
            .col-lg-8(style="place-self:center;")
              h4 Estilo de mando
              p  La manera en cómo se lidera un grupo puede ocasionar la actitud negativa en el trabajador, reflejando un entorno laboral agotador o no óptimo para el desarrollo de las tareas.
          .row
            .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
              figure
                img(src='@/assets/curso/tema2/74.png')
            .col-lg-8(style="place-self:center;")
              h4 Comunicación
              p  Es una de las partes más importantes, a través de ella se logra un buen manejo en la información de la empresa, garantizando el impacto en todos los actores; se puede tener una comunicación formal, la cual se da por medios oficiales de la empresa, con la intención de dar a conocer los lineamientos de la empresa en un tema específico; y la comunicación informal, que se realiza de manera cotidiana entre los trabajadores de la empresa, con el objeto de abordar temas de trabajo.
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Dentro de las consecuencias por encontrarse expuesto a condiciones psicosociales, se tiene estrés laboral, ansiedad, apatía, restricciones en las habilidades, falta de concentración, consumo de sustancias para calmar estados de ánimo, violencia, agotamiento, poca productividad. Además, dentro de las enfermedades laborales definidas por el Ministerio de Trabajo bajo Decreto 676 de 2020, se encuentran: trastornos psicóticos agudos y transitorios, de pánico, de ansiedad, mixto ansioso-depresivo; depresión; episodios depresivos; reacciones de estrés grave; trastorno de adaptación; angina de pecho; infarto agudo de miocardio; encefalopatía hipertensiva; ataque isquémico cerebral; úlcera gástrica, duodenal, péptica, gastroyeyunal. 
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/75.png" data-aos="fade-right")
    
    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/76.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-left") El síndrome de #[em Burnout] es una de las condiciones a las cuales se encuentran expuestas las personas con peligros psicosociales como los descritos anteriormente, y que se da como respuesta al estado de las personas por sobrecarga o estrés laborales. La persona tiende a manifestar estados negativos constantemente, sin reconocer las personas que se encuentran en su entorno laboral o su rol profesional, con manifestaciones de sus síntomas, como son: 
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/77.svg" data-aos="fade-left")
      .col-lg-8(style="place-self:center;")
        .row.m-0(style="background-color:#FFF4D3;border-radius:25px;")
          .col-lg-3.col-md-4.p-0
            .h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="border-radius:25px;background-color:#FFDD7A;box-shadow:0px 0px 10px rgba(0,0,0,.17);")
              p.mb-0(data-aos="fade-up") #[strong Entusiasmo]
          .col-lg-9.col-md-8
            .h-100.d-flex.align-items-center.ps-4.pt-3.pb-3
              p.mb-0(data-aos="fade-up") Emprender una nueva etapa de su vida laboral.
        .row.m-0.mt-4(style="background-color:#FFF4D3;border-radius:25px;")
          .col-lg-3.col-md-4.p-0
            .h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="border-radius:25px;background-color:#FFDD7A;box-shadow:0px 0px 10px rgba(0,0,0,.17);")
              p.mb-0(data-aos="fade-up") #[strong Estancamiento]
          .col-lg-9.col-md-8
            .h-100.d-flex.align-items-center.ps-4.pt-3.pb-3
              p.mb-0(data-aos="fade-up") Por generación de expectativas sin cumplimiento.
        .row.m-0.mt-4(style="background-color:#FFF4D3;border-radius:25px;")
          .col-lg-3.col-md-4.p-0
            .h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="border-radius:25px;background-color:#FFDD7A;box-shadow:0px 0px 10px rgba(0,0,0,.17);")
              p.mb-0(data-aos="fade-up") #[strong Frustración]
          .col-lg-9.col-md-8
            .h-100.d-flex.align-items-center.ps-4.pt-3.pb-3
              p.mb-0(data-aos="fade-up") Desilusión, sin motivos para continuar.
        .row.m-0.mt-4(style="background-color:#FFF4D3;border-radius:25px;")
          .col-lg-3.col-md-4.p-0
            .h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="border-radius:25px;background-color:#FFDD7A;box-shadow:0px 0px 10px rgba(0,0,0,.17);")
              p.mb-0(data-aos="fade-up") #[strong Apatía]
          .col-lg-9.col-md-8
            .h-100.d-flex.align-items-center.ps-4.pt-3.pb-3
              p.mb-0(data-aos="fade-up") Insatisfacción y pocas ganas de realizar las tareas que se le asignaron, ejecutándolas de manera automática. 
        .row.m-0.mt-4(style="background-color:#FFF4D3;border-radius:25px;")
          .col-lg-3.col-md-4.p-0
            .h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="border-radius:25px;background-color:#FFDD7A;box-shadow:0px 0px 10px rgba(0,0,0,.17);")
              p.mb-0(data-aos="fade-up") #[strong Fase quemado]
          .col-lg-9.col-md-8
            .h-100.d-flex.align-items-center.ps-4.pt-3.pb-3
              p.mb-0(data-aos="fade-up") Etapa sin retorno, porque hay un colapso emocional y cognitivo. 
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/78.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Es importante aclarar que estas enfermedades están legalmente reconocidas en las normas legales asociadas al manejo de peligros psicosociales, en las que se establecen su caracterización y la manera de proceder en los ambientes laborales:
        .row.mt-4
          .col-lg.mb-4.mb-lg-0
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/79.svg' style="z-index:2;max-width:60px;")
              .tarjeta.d-flex.align-items-center(style="background-color:#D5F5E9;")
                .p-2
                  p.mb-0(data-aos="fade-up") #[strong Decreto 1072 de 2015.]
          .col-lg.mb-4.mb-lg-0
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/80.svg' style="z-index:2;max-width:60px;")
              .tarjeta.d-flex.align-items-center(style="background-color:#D5F5E9;")
                .p-2
                  p.mb-0(data-aos="fade-up") #[strong Resolución 452 de 2012.]
          .col-lg.mb-4.mb-lg-0
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/81.svg' style="z-index:2;max-width:60px;")
              .tarjeta.d-flex.align-items-center(style="background-color:#D5F5E9;")
                .p-2
                  p.mb-0(data-aos="fade-up") #[strong Ley 1010 de 2006.]

    .row.mt-5.mb-4
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/5.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Peligros biomecánicos

    .row.mt-5
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/82.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-left") Son todas aquellas condiciones, como fuerza, posturas y movimientos, que representan un riesgo para los trabajadores y los exponen a desarrollo de patologías a nivel musculoesquelético. Además, también encontramos factores organizacionales (cargas de trabajo y duración en jornadas laborales) y condiciones ambientales (Iluminación, espacios de trabajo, herramientas y equipos) que pueden influir en este tipo de peligros.
    
    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Dentro de las consecuencias que puede tener un trabajador al encontrarse expuesto a este tipo de peligro, se tienen problemas a nivel cervical, lumbar, tendinitis, fatiga (visual y auditiva). Para evitar este tipo de afectación, se recomienda el estudio de los puestos de trabajo (distancias, condiciones físicas de los trabajadores, espacios de trabajo, iluminación, ruido, colores de los espacios, entre otros), pausas activas (movimientos repetitivos, posturas prolongadas, malas posturas).
        p.mt-4(data-aos="fade-up") Normas legales asociadas al manejo de peligros biomecánicos:
        .row.mt-4.m-auto.justify-content-center
          .col-lg.mb-4.mb-lg-0
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/84.svg' style="z-index:2;max-width:60px;")
              .tarjeta.d-flex.align-items-center(style="background-color:#FFF5C5;")
                .p-2
                  p.mb-0(data-aos="fade-up") #[strong Resolución 2413 de 1979.]
          .col-lg.mb-4.mb-lg-0
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema2/84.svg' style="z-index:2;max-width:60px;")
              .tarjeta.d-flex.align-items-center(style="background-color:#FFF5C5;")
                .p-2
                  p.mb-0(data-aos="fade-up") #[strong Decreto 1072 de 2015.]
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/83.png" data-aos="fade-left")

    .cont_2_7.mt-5
      .row.mb-4
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/tema2/5.svg" data-aos="fade-right")
        .col(style="place-self:end;")
          h3.mb-2(data-aos="fade-up") Peligros eléctricos
      .row
        .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
          p(data-aos="fade-up") Son aquellos en los que se tiene contacto con una fuente eléctrica, pudiendo esta      causar daños graves en las personas, desde quemaduras hasta la muerte. Sin embargo, la siniestralidad laboral de este tipo de peligro es de las más bajas en comparación con la de otros siniestros como químicos, tránsito, vehículos, entre otros. Pero a pesar de la baja siniestralidad, las consecuencias en accidentes eléctricos, en su mayor parte, son mortales y otros terminan en incendios.
          p.mt-4(data-aos="fade-up") El trabajo con fuentes eléctricas se puede dar de dos formas:
        .col-lg-6(style="place-self:center;")
          .row.m-0
            .col-lg-6.mb-4.mb-lg-0
              .p-4.pt-5.pb-5.h-100.bg-white.text-center(style="border-radius:25px;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
                span.text-white.fw-bold(data-aos="fade-up" style="background-color:#465FC4;border-radius:100%;padding:.8rem 1.5rem;font-size:30px;") 1
                p.mt-4(data-aos="fade-up") #[strong Directo]
                p.mt-3(data-aos="fade-up") Cuando se trabaja con partes activas de la tensión.
            .col-lg-6
              .p-4.pt-5.pb-5.h-100.bg-white.text-center(style="border-radius:25px;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
                span.text-white.fw-bold(data-aos="fade-up" style="background-color:#465FC4;border-radius:100%;padding:.8rem 1.5rem;font-size:30px;") 2
                p.mt-4(data-aos="fade-up") #[strong Indirecto]
                p.mt-3(data-aos="fade-up") Cuando los trabajadores entran en contacto con la tensión accidentalmente.
      .row.mt-4
        .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/86.png" data-aos="fade-right")
        .col-lg-8(style="place-self:center;")
          p(data-aos="fade-up") Por ello, se requiere que en las empresas siempre se tengan condiciones seguras en los lugares de trabajo, por ejemplo, centros de transformación con cerramientos de llave, distancias de seguridad, herramientas adecuadas, equipos necesarios conectados a tierra, líneas de entrada y salida aisladas y correctamente ancladas, aislamientos eléctricos, seguimiento a conductores eléctricos, educación en manipulación de herramientas, aplicación de las 5 reglas de oro (corte, bloqueo, verificación de ausencia de tensión, puesta a tierra y demarcar el área de trabajo).
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Dentro de las consecuencias por estar en contacto con este tipo de peligro, se encuentran las relacionadas directamente con el cuerpo de la persona, ocasionando un choque eléctrico o, de manera indirecta, generando un arco eléctrico, lo cual puede ocasionar quemaduras. También se pueden generar incendios, explosiones y efectos secundarios de una descarga (caídas, golpes).
        p.mt-4(data-aos="fade-up") Normas legales asociadas al manejo de peligros eléctricos:
        ul.lista-ul.mt-4
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  RETIE (Reglamento Técnico de Instalaciones Eléctricas) Resolución 90708 de 2013.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  NTC 2050 (Código Eléctrico Colombiano).
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/87.png" data-aos="fade-left")
    
    .row.mb-4.mt-5
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/5.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Peligros locativos

    .row
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/88.png" data-aos="fade-right")
      .col-lg-9(style="place-self:center;")
        p(data-aos="fade-up") Son las condiciones, con relación a las instalaciones y áreas de trabajo, que actúan bajo contextos no óptimos para el desarrollo de las actividades y pueden generar accidentes de trabajo. Incluyen orden, aseo, señalización y estado de la infraestructura (puertas, paredes, techo, vías transitables). Este peligro es uno de los mayores causantes de accidentes en las empresas, teniendo en cuenta que, por sus características negativas, actúan constantemente en las jornadas laborales, afectando la seguridad y la productividad de los trabajadores. 
        p.mt-4(data-aos="fade-up") Dentro de las consecuencias frecuentes que pueden ocurrir, se encuentran caídas, resbalones, laceraciones, golpes, infecciones, alergias y presencia de animales por falta de aseo. 
        p.mt-4(data-aos="fade-up") Normas legales asociadas al manejo de peligros locativos:
        ul.lista-ul.mt-3
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Resolución 2400 de 1979.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            |  Ley 9 de 1979.
    
    .row.mb-4.mt-5
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/5.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Peligros públicos
    
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Condiciones que se presentan en lugares públicos y exponen un riesgo para los trabajadores. Dentro de estas condiciones, se pueden encontrar desorden, atentados, asaltos, accidentes de tránsito, terrorismo. 
        p.mt-4(data-aos="fade-up") Las consecuencias que puede tener un trabajador por encontrarse      expuesto a estos peligros pueden ser físicas o psicológicas, teniendo en cuenta la magnitud y el tipo de agresión al que fue sometido o en el que se vio involucrado. Por ello, es importante que los trabajadores se encuentren entrenados y capacitados, con el fin de responder ante una situación. Por ejemplo, mantener la calma; estar atento a su entorno; evitar usar celular u objetos distractores; no responder ante agresiones; identificar horario y rutas para transitar, principalmente en la jornada nocturna. 
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/89.png" data-aos="fade-left")
    
    .row.mb-4.mt-5
      .col-auto.pe-0
        figure
          img(src="@/assets/curso/tema2/5.svg" data-aos="fade-right")
      .col(style="place-self:end;")
        h3.mb-2(data-aos="fade-up") Peligros naturales
    
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/90.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Condiciones ambientales que se encuentran relacionadas con fenómenos naturales, como tormentas, sismos, huaycos, inundaciones, terremotos, entre otros, que presentan un riesgo inminente en los trabajadores, teniendo en cuenta el grado de vulnerabilidad en el impacto, peligrosidad y exposición en la que se encuentre el lugar de trabajo de acuerdo con la ubicación geográfica. Las consecuencias que se pueden derivar de la exposición a estos pueden ser físicas y psicológicas, lo cual depende de la magnitud del evento. Por ello, los trabajadores conocerán el plan de respuesta ante emergencia establecido por la empresa, en el cual se identificó la vulnerabilidad ante posibles eventos. 
        p.mt-4(data-aos="fade-up") Cuando la empresa ha identificado su vulnerabilidad con relación a las condiciones climáticas o peligros naturales, debe realizar un plan de preparación y respuesta a emergencias, con el objetivo de tener claridad en las acciones a implementar en caso de ocurrir un evento natural, el cual puede afectar de forma interna y externa a la empresa. Dentro de este plan, se tiene preparada una brigada de emergencia que pueda atender evacuación, primeros auxilios, y personal contra incendios. De igual manera, cada uno de los trabajadores de la empresa debe tener conocimiento sobre cómo debe actuar ante una situación y cuáles son los puntos de encuentro establecidos por la organización para el control. 
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Por otra parte, la empresa deberá asignar un presupuesto para entrenamiento, compra de equipos de rescate, botiquín, y todos los recursos que se requieran en la atención ante una emergencia. 
        p.mt-4(data-aos="fade-up") Normas legales asociadas al manejo de peligros naturales:
        ul.lista-ul.mt-3
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Decreto 1072 de 2015.
          li(data-aos="fade-up")
            i.fas.fa-check-circle(style="color:#465FC4;")
            | Ley 1523 de 2012.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/91.png" data-aos="fade-left")
    
    Separador.mt-5
    
    .titulo-segundo
      h2#t_2_2 2.2	Medidas de control 

    .row
      .col-auto(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/92.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-left") Son todas aquellas actividades o acciones que realiza una empresa a fin de eliminar los peligros o minimizar el riesgo al cual se encuentran expuestos los trabajadores cuando están en contacto con los peligros, hasta lograr un nivel aceptable en el nivel de aceptabilidad con base en la GTC-45. Las medidas de control se pueden realizar en 3 aspectos, tal como se presentan a continuación:
    
    p.mt-4(data-aos="fade-up") Las medidas de control permiten minimizar los riesgos y prevenir accidentes en el desarrollo de actividades. 

    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.col-lg-11.m-auto(titulo="Fuente")
            p Cuando se realiza el control sobre la fuente generadora del peligro. Por ejemplo, colocarle protección a una herramienta.
          .row.col-lg-11.m-auto(titulo="Medio")
            p Cuando se realiza el control con acciones que intervienen entre la fuente y los trabajadores. Por ejemplo, inspecciones a herramientas.
          .row.col-lg-11.m-auto(titulo="Individuo")
            p Cuando se realiza el control sobre las personas, con el fin de protegerlas. Por ejemplo, dotación de EPP.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/93.svg" data-aos="fade-left")



    

</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1 *, .cont_2_1
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 35%
  height: 60%
  top: -9px
  right: 0
  background-color: #FFDD7A
.cont_tarjeta1:hover
  background-color: #DADFF3 !important
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--gris.acordion__activo
  background-color: #D5F5E9
.cont_2_2 *,.cont_2_2
  position: relative
.cont_2_2:before
  width: 125%
  height: 100%
  content: ''
  position: absolute
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/25.png)
  background-position: center
  background-size: cover
.slyder-a__btn--sigt, .slyder-a__btn--atrs
   background-color: #F9931F
.slyder-a__bullets__item--active
  background-color: #F9931F !important
  border-color: #F9931F !important
.slyder-a__bullets__item
  background-color: #85A3BC
.cont_2_3
  background: url(../assets/curso/tema2/37.png)
  background-position: bottom
  background-size: cover
.contenido__tarjetas
  background-color: rgba(245,195,52,.9)
  position: absolute
  width: 100%
  bottom: 0px
  transform: translateY(calc(100% - 50px))
  transition: all .4s ease-out
.container__tarjetas:hover .contenido__tarjetas
  transform: translateY(0)
.tabs-a__content-item.tabs-a__content-item--active .tarjeta
  background-color: #EAFAF4
.tabs-a.color-acento-botones .tabs-a__tab__selected
  background-color: #FFC721
.tabs-a.color-acento-botones .tabs-a__tab__selected:before
  background-color: #FFC721
.tabs-a.color-acento-botones .tabs-a__tab:hover, .tabs-a.color-acento-botones .tabs-a__tab:active, .tabs-a.color-acento-botones .tabs-a__tab:focus
  background-color: #FFC721
.tabs-a__tab
  background-color: #E8E8E8
.cont_tarjeta_oreja:hover
  background-color: #465FC4 !important
.cont_tarjeta_oreja:hover p
  color: white !important
.cont_2_4
  background: url(../assets/curso/tema2/56.png)
  background-position: bottom
  background-size: cover
.cont_2_5 *, .cont_2_5
  position: relative
.cont_2_5:before
  content: ''
  position: absolute
  width: 35%
  height: 60%
  top: -9px
  right: 0
  background-color: #D5F5E9
.cont_2_6 *, .cont_2_6
  position: relative
.cont_2_6:before
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
.cont_2_7 *, .cont_2_7
  position: relative
.cont_2_7:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  top: 0
  left: -15%
  background: url(../assets/curso/tema1/2.png)
  background-size: cover
  background-position: top
  background-repeat: no-repeat
</style>
