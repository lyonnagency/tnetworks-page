<template>
  <div class="landing-page overflow-hidden">
    <!--    MENU    -->
    <div class="menu-landing-page w-100 pt-3 pt-lg-5 ">
      <div class="d-flex justify-content-end align-items-center w-100 menu-container menu-wrapper">

        <b-navbar-nav
          class="w-100 align-items-center flex-row d-flex px-2 justify-content-center menu-header justify-content-between container1">

          <nuxt-link to="/" class="text-item">
            <img
              src="~assets/img/svg/tnetworks-logo-white.svg"
              alt="Oseznos logo header"
              class="logo-header-landing"
              width="155"
              height="49"
            />
          </nuxt-link>
          <b-nav-item
            class="fs-login-on-menu arrow-after-text btn-bordered-white px-lg-3 px-2 py-1 py-lg-2 fs-16"
            to="/">
            Contáctenos
          </b-nav-item>
        </b-navbar-nav>
      </div>
    </div>

    <!--  HERO IMAGE  -->
    <section class="hero hero-landing d-flex align-items-center">
      <div class="d-flex flex-wrap flex-sm-nowrap container1 h-100 position-relative">
        <div class="col-12 col-sm-6 d-flex align-items-end align-items-sm-center mt-5 mt-sm-0 flex-wrap">
          <div class="d-flex flex-wrap mt-lg-5 pt-lg-5 mb-sm-5 mb-md-0">
            <h2 class="ff-flexo-bold fs-72 w-100 mb-lg-5 pb-lg-4 text-white">
              Almacenamiento <br> All-Flash.
            </h2>
            <p class="ff-aalto-sans-pro-medium fs-18 text-white d-none d-lg-block">
              Pure Storage® rediseña la arquitectura de almacenamiento en un modelo <strong>Evergreen™</strong> que
              habilita aplicaciones
              de última generación eliminando las costosas actualizaciones y disminuyendo los tiempos de espera.
            </p>
            <button
              class="arrow-after-text arrow-after-text-bold btn-radius btn-bordered-bottom-white px-0 py-2 mt-sm-2 mt-lg-4 btn
              fs-16 ff-aalto-sans-pro-medium">
              <p class="mx-0 mb-0">Contáctenos</p>
            </button>
          </div>
        </div>
        <div
          class="col-12 col-sm-6 d-flex flex-wrap justify-content-end align-items-center position-relative ml-lg-5 px-0 px-lg-3">
          <div class="d-flex flex-wrap  justify-content-lg-end mt-sm-4 mt-lg-5 pt-lg-5">

            <div class="item-hero d-flex col-sm-12 col-lg-10 align-items-center pb-4 pb-sm-2 px-0 px-lg-3">
              <div
                class="col-5 d-flex justify-content-center justify-content-sm-end justify-content-md-center mr-3 mr-sm-0 pr-sm-0 pr-md-3">
                <img class="icon-hero-landing" width="127" height="127" src="../assets/img/svg/tn-landing-hero-1.svg"
                     alt="">
              </div>
              <div class="col-5 col-sm-7 col-md-5  d-flex justify-content-center mr-3">
                <p class="ff-aalto-pans-pro-semiboldIt text-white">
                  2.5x de eficiencia de almacenamiento
                </p>
              </div>
            </div>

            <div class="item-hero d-flex col-sm-12 col-lg-10 align-items-center pb-4 pb-sm-2 px-0 px-lg-3">
              <div
                class="col-5 d-flex justify-content-center justify-content-sm-end justify-content-md-center mr-3 mr-sm-0 pr-sm-0 pr-md-3">
                <img class="icon-hero-landing" width="127" height="127" src="../assets/img/svg/tn-landing-hero-2.svg"
                     alt="">
              </div>
              <div class="col-5 col-sm-7 col-md-5 ">
                <p class="ff-aalto-pans-pro-semiboldIt text-white">
                  Ahorro promedio de <br> US $500k
                </p>
              </div>
            </div>

            <div class="item-hero d-flex col-sm-12 col-lg-10 align-items-center px-0 px-lg-3">
              <div
                class="col-5 d-flex justify-content-center justify-content-sm-end justify-content-md-center mr-3 mr-sm-0 pr-sm-0 pr-md-3">
                <img class="icon-hero-landing" width="127" height="127" src="../assets/img/svg/tn-landing-hero-3.svg"
                     alt="">
              </div>
              <div class="col-5 col-sm-7 col-md-5 pr-sm-0">
                <p class="ff-aalto-pans-pro-semiboldIt text-white">
                  Costo total de propiedad 50% más bajo
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
    <section class="space-section-top space-section-bottom">

      <div class="d-flex flex-wrap container1 align-items-center">
        <div class="col-12 col-sm-5 pr-lg-5 pr-sm-0 pr-md-3 ">
          <h3 class="ff-flexo-bold fs-20 text-orange-tn text-uppercase mb-4">TECNOLOGÍA FLASHBLADE ™</h3>
          <h2 class="ff-flexo-bold fs-50-land w-100 mb-5 mb-sm-3">La solución más avanzada de la industria.</h2>
          <p class="ff-aalto-sans-pro-regular fs-18 mb-4">
            La tecnología Flashblade® ofrece simplicidad y agilidad para que su empresa cumpla con los requisitos más
            exigentes de datos modernos.
          </p>
        </div>
        <div class="col-12 col-sm-6 offset-sm-1 pr-lg-5 pl-0">
          <div class="img-side-container side-1">
            <img class="img-fluid" src="../assets/img/landing-img-1.png"
                 alt="Menos riesgo, más continuidad - tnetworks">
          </div>
        </div>
      </div>

      <div class="d-flex flex-wrap-reverse container1 py-5 my-5 align-items-center">
        <div class="col-sm-5 pl-sm-5 pl-0 mr-lg-4">
          <div class="img-side-container side-2">
            <img class="img-fluid" src="../assets/img/landing-img-2.png"
                 alt="Menos riesgo, más continuidad - tnetworks">
          </div>
        </div>
        <div class="col-sm-6 col-md-5 offset-sm-1 ">
          <h3 class="ff-flexo-bold fs-20 text-orange-tn text-uppercase mb-4">TECNOLOGÍA PURE 1 ™</h3>
          <h2 class="ff-flexo-bold fs-50-land w-100 mb-5 mb-sm-3">Inteligencia <br> predictiva.</h2>
          <p class="ff-aalto-sans-pro-regular fs-18 mb-4">
            Con Pure1™ consiga una visión en tiempo real de su red y obtenga una predicción de su capacidad y desempeño.
            Sin costo extra.
          </p>
        </div>
      </div>

      <div class="d-flex flex-wrap container1 pt-5 mt-5 align-items-center">
        <div class="col-sm-5 pr-md-5 pr-sm-0 pr-md-3">
          <h3 class="ff-flexo-bold fs-20 text-orange-tn text-uppercase mb-4">EVERGREEN STORAGE ™</h3>
          <h2 class="ff-flexo-bold fs-50-land w-100 mb-5 mb-sm-3">Sin costosas actualizaciones.</h2>
          <p class="ff-aalto-sans-pro-regular fs-18 mb-4">
            Evergreen™ Storage ofrece actualizaciones y expansiones rápidas, sin inconvenientes y sin interrupciones
          </p>
        </div>
        <div class="col-sm-6 offset-sm-1 pr-5 pl-0">
          <div class="img-side-container side-3">
            <img class="img-fluid" src="../assets/img/landing-img-3.png"
                 alt="Menos riesgo, más continuidad - tnetworks">
          </div>
        </div>
      </div>

    </section>
    <section class="bg-gray-tn-land pt-5">
      <div class="container1">
        <div class="d-flex flex-wrap  mt-5 py-5 space-section-bottom justify-content-center justify-content-sm-between">

          <div
            class="col-10 col-sm-6 col-md my-2 my-lg-0 col-lg border-radius-10 bg-white mx-3 mx-sm-2 py-5 px-lg-5 d-flex d-sm-none d-md-flex flex-wrap justify-content-lg-center">
            <div class="col-4 px-1">
              <img width="72" height="72" class="check-land" src="../assets/img/svg/tn-check-landing.svg"
                   alt="Industria 1">
            </div>
            <div class="col-10 col-lg-8 d-flex mt-3 mt-lg-0">
              <h3 class="ff-aalto-sans-pro-medium fs-18  mb-0 mt-1">
                Actualizaciones de controlador incluidas cada 3 años.
              </h3>
            </div>
          </div>

          <div
            class="col-10 col-sm-6 col-md my-2 my-lg-0 col-lg border-radius-10 bg-white mx-3 mx-sm-2 py-5 px-lg-5 d-flex d-sm-none d-md-flex flex-wrap justify-content-lg-center">
            <div class="col-4 px-1">
              <img width="72" height="72" class="check-land" src="../assets/img/svg/tn-check-landing.svg"
                   alt="Industria 1">
            </div>
            <div class="col-10 col-lg-8 d-flex mt-3 mt-lg-0">
              <h3 class="ff-aalto-sans-pro-medium fs-18  mb-0 mt-1">
                Reducción de necesidad de recursos de gestión de almacenamiento.
              </h3>
            </div>
          </div>

          <div class="d-none d-sm-flex d-md-none flex-nowrap  border-radius-10">
            <div
              class="col-10 col-sm-6 my-2 my-lg-0 col-lg ml-sm-0 border-radius-10 bg-white mx-3 mr-sm-2 py-5 px-lg-5 d-flex flex-wrap justify-content-lg-center">
              <div class="col-4 px-1">
                <img width="72" height="72" class="check-land" src="../assets/img/svg/tn-check-landing.svg"
                     alt="Industria 1">
              </div>
              <div class="col-10 col-lg-8 d-flex mt-3 mt-lg-0">
                <h3 class="ff-aalto-sans-pro-medium fs-18  mb-0 mt-1">
                  Actualizaciones de controlador incluidas cada 3 años.
                </h3>
              </div>
            </div>

            <div
              class="col-10 col-sm-6 my-2 my-lg-0 col-lg border-radius-10 bg-white mx-3 mx-sm-2 py-5 px-lg-5  d-flex flex-wrap justify-content-lg-center">
              <div class="col-4 px-1">
                <img width="72" height="72" class="check-land" src="../assets/img/svg/tn-check-landing.svg"
                     alt="Industria 1">
              </div>
              <div class="col-10 col-lg-8 d-flex mt-3 mt-lg-0">
                <h3 class="ff-aalto-sans-pro-medium fs-18  mb-0 mt-1">
                  Reducción de necesidad de recursos de gestión de almacenamiento.
                </h3>
              </div>
            </div>
          </div>

          <div
            class="col-10 col-md col-sm-12 my-2 my-lg-0 col-lg border-radius-10 bg-white mx-3 mx-sm-0 mx-md-2 py-5 px-lg-5
            d-flex flex-wrap justify-content-lg-center">
            <div class="col-4 px-1">
              <img width="72" height="72" class="check-land" src="../assets/img/svg/tn-check-landing.svg"
                   alt="Industria 1">
            </div>
            <div class="col-10 col-lg-8 d-flex mt-3 mt-lg-0">
              <h3 class="ff-aalto-sans-pro-medium fs-18  mb-0 mt-1">
                Cero inversiones desperdiciadas
              </h3>
            </div>
          </div>

        </div>
      </div>
      <div class="d-flex justify-content-center flex-wrap ">
        <div class="col-10 col-lg-6 d-flex justify-content-center flex-wrap space-section-bottom">
          <img class="tn-purestorage" src="../assets/img/svg/tn-purestarage.svg" alt="Purestaorage" width="222"
               height="39">
          <div class="w-100 col-12 d-flex justify-content-center py-4">
            <h2 class="ff-flexo-bold fs-50 text-center">Continuidad a su negocio</h2>
          </div>
          <div class="w-100 col-12 d-flex justify-content-center">
            <p class="ff-aalto-sans-pro-regular fs-18 text-center">
              Pure Storage tiene un historial comprobado de nueve actualizaciones generacionales de hardware y más de 20
              actualizaciones importantes de software con cero tiempos de inactividad y cero inversiones desperdiciadas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-5 bg-cta-landing d-flex justify-content-center">
      <div class="col-12 col-sm-11 col-lg-7 d-flex flex-wrap space-section-top pb-5 mb-5">
        <div class="w-100">
          <h2 class="ff-flexo-bold fs-45 text-white text-center">
            Obtenga su almacenamiento All-Flash con Pure Storage®
          </h2>
        </div>
        <div class="w-100 d-flex justify-content-center">
          <button class="btn-bordered-white-thin text-white py-3 px-2 px-sm-5 px-lg-5 mt-5 ff-flexo-regular fs-30">
            Desde <strong>$2,500 USD</strong> / mes
          </button>
        </div>
      </div>
    </section>
    <section class="container-95 py-5">
      <div class="text-center py-5 mt-5 mb-3">
        <h2 class="ff-flexo-bold fs-35">Nuestros clientes opinan:</h2>
      </div>
      <div>
        <b-carousel
          id="carousel-no-animation"
          style="text-shadow: 0px 0px 2px #000"
          animation
          indicators
          class=" py-5 bg-gray-tn-land border-radius-30"
        >
          <b-carousel-slide>
            <div class="d-flex justify-content-center">
              <div class="inner-slider col-12 col-lg-5 px-4">
                <img src="../assets/img/svg/tn-nissan-opinion.svg" alt="" width="75">
                <p class="ff-aalto-sans-pro-regular fs-26 text-black my-4 py-2">
                  "Solo la solución que nos ofreció TNetworks puede
                  cumplir con el rendimiento que necesitamos”.</p>
                <p class="ff-aalto-sans-pro-semibold fs-18 fs-sm-18 text-black mb-0">Vladimir Putin</p>
                <p class="ff-aalto-sans-pro-semibold fs-18 fs-sm-18 text-orange-tn">Director Comercial</p>
              </div>
            </div>
          </b-carousel-slide>
          <b-carousel-slide>
            <div class="d-flex justify-content-center">
              <div class="inner-slider col-12 col-lg-5 px-4">
                <img src="../assets/img/svg/tn-nissan-opinion.svg" alt="" width="75">
                <p class="ff-aalto-sans-pro-regular fs-26 text-black my-4 py-2">
                  "Solo la solución que nos ofreció TNetworks puede
                  cumplir con el rendimiento que necesitamos”.</p>
                <p class="ff-aalto-sans-pro-semibold fs-18 fs-sm-18 text-black mb-0">Vladimir Putin</p>
                <p class="ff-aalto-sans-pro-semibold fs-18 fs-sm-18 text-orange-tn">Director Comercial</p>
              </div>
            </div>
          </b-carousel-slide>
          <b-carousel-slide>
            <div class="d-flex justify-content-center">
              <div class="inner-slider col-12 col-lg-5 px-4">
                <img src="../assets/img/svg/tn-nissan-opinion.svg" alt="" width="75">
                <p class="ff-aalto-sans-pro-regular fs-26 text-black my-4 py-2">
                  "Solo la solución que nos ofreció TNetworks puede
                  cumplir con el rendimiento que necesitamos”.</p>
                <p class="ff-aalto-sans-pro-semibold fs-18 fs-sm-18 text-black mb-0">Vladimir Putin</p>
                <p class="ff-aalto-sans-pro-semibold fs-18 fs-sm-18 text-orange-tn">Director Comercial</p>
              </div>
            </div>
          </b-carousel-slide>
          <b-carousel-slide>
            <div class="d-flex justify-content-center">
              <div class="inner-slider col-12 col-lg-5 px-4">
                <img src="../assets/img/svg/tn-nissan-opinion.svg" alt="" width="75">
                <p class="ff-aalto-sans-pro-regular fs-24 text-black my-4 py-2">
                  "Solo la solución que nos ofreció TNetworks puede
                  cumplir con el rendimiento que necesitamos”.</p>
                <p class="ff-aalto-sans-pro-semibold fs-18 fs-sm-18 text-black mb-0">Vladimir Putin</p>
                <p class="ff-aalto-sans-pro-semibold fs-18 fs-sm-18 text-orange-tn">Director Comercial</p>
              </div>
            </div>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </section>
    <section class="py-sm-5 pt-5">
      <div class="d-flex flex-wrap container2 py-5">
        <div class="col-12 text-center text-sm-left col-sm-4 mb-4 mb-sm-0">
          <img class="img-fluid avatar-contact" src="../assets/img/tn-fer-avatar.png" alt="Fernanda Peña">
        </div>
        <div class="col-12 col-sm-7 offset-sm-1 px-0 d-flex align-items-center justify-content-end">
          <FormInscription :versionForm="'landing'" class="landing"></FormInscription>
        </div>
      </div>
    </section>
    <!--    <section class="space-section-bottom">-->
    <!--      <TitleSection titleUp="Bienvenido" titleMain1="¿Por qué ser un osezno?" titleMain2="">-->
    <!--      </TitleSection>-->
    <!--      <div class="container3 px-lg-5">-->
    <!--        <p class="ff-museo-sans fs-sm-13 px-lg-5 text-center mt-4">-->
    <!--          Porque aprenderás a como es formar parte de un equipo de fútbol americano infantil y juvenil para niños y-->
    <!--          niñas campeón. En Oseznos de Morelia nos justa ganar, pero sabemos que no es lo más importante, ya que lo que-->
    <!--          más nos importa es fomentar los valores que predica el fútbol americano: la disciplina y el trabajo en equipo,-->
    <!--          respeto por los demás, honestidad (un valor muy valioso para el fútbol americano pero más aún para la vida),-->
    <!--          aceptar las frustraciones (ya que no siempre se gana), asumir responsabilidades, la importancia del esfuerzo-->
    <!--          (no siempre se gana, pero siempre hay que darlo todo) y por supuesto, <strong>aprender a ganar</strong>.-->
    <!--          En Oseznos nuestro objetivo no es crear jugadores, sino utilizar las herramientas de este deporte para crear-->
    <!--          seres humanos de bien.-->
    <!--        </p>-->
    <!--      </div>-->
    <!--      <TableBenefits class="pt-5">-->
    <!--      </TableBenefits>-->
    <!--    </section>-->

    <!--    <section class="space-section-bottom ">-->
    <!--      &lt;!&ndash;        <TitleSection titleUp="Bienvenido" titleMain1="Metodología 2020" titleMain2=""></TitleSection>&ndash;&gt;-->
    <!--      <div class="d-flex mt-5 pt-5">-->
    <!--        <div class="col-6 bg-yellow-before skew-left-before d-flex py-5 mx-1">-->
    <!--          <div class="offset-1">-->

    <!--            <ul class="list-school">-->
    <!--              <p class="ff-old-school-in-alt fs-46 color-purple ">Incluye</p>-->
    <!--              <li>-->
    <!--                <span class="number">01</span>-->
    <!--                Transporte al campo desde puntos céntricos de la ciudad-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <span class="number">02</span>-->
    <!--                Seguro de gastos médicos mayores-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <span class="number">03</span>-->
    <!--                Uniforme corto (short y playera)-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <span class="number">04</span>-->
    <!--                Material de campo-->
    <!--              </li>-->
    <!--            </ul>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="col-6 bg-purple-darker-before skew-right-before py-3 mx-1 d-flex align-items-center">-->
    <!--          <div class="col-7 offset-2">-->

    <!--            &lt;!&ndash;              <a target="_blank"&ndash;&gt;-->
    <!--            &lt;!&ndash;                 href="https://wa.me/5214432066522?text=Quiero más%20información%20sobre%20Club%20Oseznos"&ndash;&gt;-->
    <!--            &lt;!&ndash;                 class="trapeze trapeze-white ff-bebas px-lg-4 px-3 px-sm-2 px-md-2 mx-2 fs-sm-13">&ndash;&gt;-->
    <!--            &lt;!&ndash;                Aprende más&ndash;&gt;-->
    <!--            &lt;!&ndash;              </a>&ndash;&gt;-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
    <!--    <section class="space-section-bottom ">-->
    <!--      <div class="d-flex mt-5 pt-5 flex-wrap py-5">-->
    <!--        <div class="col-12 col-lg-6 skew-yellow-school skew-left-before d-flex py-5 h-100-sm-before">-->
    <!--          <div class="offset-lg-1 offset-sm-1 offset-md-2 py-sm-5">-->
    <!--            <ul class="list-school py-5">-->
    <!--              <p class="ff-old-school-in-alt fs-46 color-purple ">Tu suscripción <br> incluye</p>-->
    <!--              <li>-->
    <!--                <span class="number">01</span>-->
    <!--                Transporte al campo desde puntos céntricos de la ciudad-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <span class="number">02</span>-->
    <!--                Seguro de gastos médicos mayores-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <span class="number">03</span>-->
    <!--                Uniforme corto (short y playera)-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <span class="number">04</span>-->
    <!--                Material de campo-->
    <!--              </li>-->
    <!--            </ul>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div-->
    <!--          class="col-12 col-lg-6 skew-purple-school skew-right-before py-5 d-flex align-items-center mt-md-5 mt-lg-0">-->
    <!--          <div class="col-12 col-sm-11 col-md-8 col-lg-8 offset-1 offset-md-2 offset-lg-2 px-4">-->
    <!--            <h2 class="ff-old-school-in-alt fs-46 color-yellow">La mensualidad</h2>-->
    <!--            <p class="fs-14 text-white ff-museo-sans">-->
    <!--              <strong>El precio de la mensualidad es de $650 ¡Sin pago de inscripción!</strong>-->
    <!--            </p>-->
    <!--            <p class="fs-14 text-white ff-museo-sans">-->
    <!--              Entrenamos martes, miércoles y jueves de 5:00 a 7:00 pm.-->
    <!--            </p>-->
    <!--            <p class="fs-14 text-white ff-museo-sans">-->
    <!--              *No incluye equipo o inscripción a la liga de temporada.-->
    <!--            </p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
    <!--    <section class="torn-bg torn-bg-purple space-section-bottom pt-5 pt-md-0">-->
    <!--      <div class="content-torn container1 px-1 d-flex align-items-center flex-wrap">-->
    <!--        <div class="d-flex flex-wrap ball-section justify-content-center">-->
    <!--          <div class="col-12 col-sm-6 col-md-7 col-lg-9 px-0 d-md-flex align-items-center">-->
    <!--            <div class="ball-wrapper">-->
    <!--              &lt;!&ndash;              <img src="~assets/img/ball.png" alt="Balón Oseznos"/>&ndash;&gt;-->
    <!--            </div>-->
    <!--            <div class="mr-lg- my-4 px-4 px-md-0">-->
    <!--              <h2 class="font-italic color-yellow ff-old-school-in-alt fs-40">-->
    <!--                ¡ VEN A LA CLASE MUESTRA !-->
    <!--              </h2>-->
    <!--              <h3 class="ff-bebas text-white fs-sm-13 tracking-50 pr-4 font-italic">-->
    <!--                SIN COMPROMISOS, VEN Y APRENDE DESDE CERO O A PARTIR DE UN NIVEL-->
    <!--              </h3>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="col-12 col-sm-6 col-md-5 col-lg-3 px-0 d-flex align-items-center justify-content-center">-->
    <!--            <nuxt-link-->
    <!--              to="registro"-->
    <!--              class="trapeze trapeze-yellow ff-bebas px-md-5 px-5 px-sm-4 mx-2 line-overflow line-overflow-w fs-sm-13">-->
    <!--              Aparta tu lugar-->
    <!--            </nuxt-link>-->
    <!--            <a-->
    <!--              target="_blank" href="https://wa.me/5214432066522?text=Quiero más%20información%20sobre%20Club%20Oseznos"-->
    <!--              class="d-none trapeze trapeze-white ff-bebas px-lg-4 px-3 px-sm-2 px-md-2 mx-2 fs-sm-13"-->
    <!--            >-->
    <!--              Solicita más información-->
    <!--            </a>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
    <!--    <section class="map-section torn-bg torn-bg-white space-section-bottom">-->
    <!--      <div class="wrapper-map">-->
    <!--        <div class="mapouter">-->
    <!--          <div class="gmap_canvas">-->
    <!--            <iframe-->
    <!--              width="100%"-->
    <!--              height="500"-->
    <!--              id="gmap_canvas"-->
    <!--              src="https://maps.google.com/maps?q=19%C2%B039'41.7%22N%20101%C2%B009'24.2%22W&t=&z=17&ie=UTF8&iwloc=&output=embed"-->
    <!--              frameborder="0"-->
    <!--              scrolling="no"-->
    <!--              marginheight="0"-->
    <!--              marginwidth="0"-->
    <!--            ></iframe-->
    <!--            >-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
    <!--    <section class="space-section-bottom">-->
    <!--      <div class="py-4 title-form torn-bg torn-bg-purple">-->
    <!--        <div class="container2 py-4 d-flex justify-content-center">-->
    <!--          <div class="d-flex align-items-center flex-wrap">-->
    <!--            <h2 class="color-yellow ff-old-school-in-alt fs-46 mb-3 my-md-0 text-center">-->
    <!--              ¿Tienes Dudas? Contáctanos-->
    <!--            </h2>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="container4 mt-5">-->
    <!--        <ContactForm formOrigin="Landing" colorText="color-purple" classExtra="input-purple"></ContactForm>-->
    <!--      </div>-->
    <!--    </section>-->
    <SiteFooter class="footer-landing"></SiteFooter>
  </div>
</template>

<script>
  import SiteHeader from "~/components/layout/SiteHeader";
  import SiteFooter from "~/components/layout/SiteFooter";

  import TitleSection from "~/components/commons/TitleSection";
  import TableBenefits from "~/components/commons/TableBenefits";
  import SliderItem from "~/components/pages/home/SliderItem";
  import ContactForm from "~/components/commons/ContactForm";

  import FormInscription from "~/components/commons/FormInscription";

  export default {
    name: "landing-page",
    components: {
      SiteFooter,
      SiteHeader,
      SliderItem,
      TitleSection,
      TableBenefits,
      FormInscription
    },
    head() {
      return {
        title: "La mejor escuela de fútbol americano y tochito",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Oseznos de Morelia, es la mejor escuela de fútbol americano para niñas y niños, enseñamos las bases del juego y los valores del deporte"
          },
          {
            property: "og:description",
            content:
              "Oseznos de Morelia, es la mejor escuela de fútbol americano para niñas y niños, enseñamos las bases del juego y los valores del deporte",
            vmid: "og:description"
          },
          {
            property: "og:url",
            content: "http://oseznos.com.mx/la-escuela",
            vmid: "og:url"
          },
          {
            property: "og:image",
            content: "http://oseznos.com.mx/oseznos-logo-meta.jpg",
            // content: this.socialImg,
            vmid: "og:image"
          },
          {
            property: "og:title",
            content: "Oseznos de Morelia | La mejor escuela de fútbol americano y tochito",
            vmid: "og:title"
          },
          {
            property: "og:type",
            content: "website",
            vmid: "og:type"
          },
          {
            property: "og:site_name",
            content: "Oseznos de Morelia",
            vmid: "og:title"
          },
          {
            property: "twitter:card",
            content: "summary_large_image",
            vmid: "twitter:card"
          },
          {
            property: "twitter:image",
            content: "http://oseznos.com.mx/oseznos-logo-meta.jpg",
            // content: this.socialImg,
            vmid: "twitter:image"
          },
          {
            property: "twitter:title",
            content: "Oseznos de Morelia | La mejor escuela de fútbol americano y tochito",
            vmid: "twitter:title"
          },
          {
            property: "twitter:description",
            content:
              "",
            vmid: "twitter:description"
          }
        ]
      };
    }
  }
</script>

<style scoped>

</style>
