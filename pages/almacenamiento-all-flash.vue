<template>
  <div class="landing-page overflow-hidden">
    <!--    MENU    -->
    <div class="menu-landing-page w-100 pt-3 pt-lg-5 ">
      <div class="d-flex justify-content-end align-items-center w-100 menu-container menu-wrapper">
        <img src="https://tracker.metricool.com/c3po.jpg?hash=1fbaffd28a1ceb4f4805657758028bb3"/>
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
          <li class="fs-login-on-menu arrow-after-text btn-bordered-white px-lg-3 px-2 py-1 py-lg-2 fs-16">
            <a
              href="#contact">
              Contáctenos
            </a>
          </li>
<!--          <b-nav-item-->
<!--            class="fs-login-on-menu arrow-after-text btn-bordered-white px-lg-3 px-2 py-1 py-lg-2 fs-16"-->
<!--            to="/">-->
<!--            Contáctenos-->
<!--          </b-nav-item>-->
        </b-navbar-nav>
      </div>
    </div>

    <!--  HERO IMAGE  -->
    <section class="hero hero-landing d-flex align-items-center">
      <div class="d-flex flex-wrap flex-sm-nowrap container1 h-100 position-relative">
        <div class="col-12 col-sm-6 d-flex align-items-end align-items-sm-center mt-5 mt-sm-0 flex-wrap">
          <div class="d-flex flex-wrap mt-lg-5 pt-lg-5 mb-sm-5 mb-md-0">

            <div class="w-100">
              <h2 class="ff-flexo-bold fs-45 text-white ">
                Obtenga su almacenamiento All-Flash con Pure Storage®
              </h2>
            </div>
            <div class="w-100 d-flex ">
              <button class="btn-bordered-white-thin text-white py-3 px-2 px-sm-5 px-lg-5 my-2 mt-md-4 mt-lg-5 ff-flexo-regular fs-30">
                Desde <strong>$2,500 USD</strong> / mes
              </button>
            </div>



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
              <div class="col-5 col-sm-7 col-md-5   d-flex justify-content-center mr-3 pr-md-0 mr-xl-3">
                <p class="ff-aalto-pans-pro-semiboldIt text-white fs-18">
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
              <div class="col-5 col-sm-7 col-md-5  ">
                <p class="ff-aalto-pans-pro-semiboldIt text-white fs-18">
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
              <div class="col-5 col-sm-7 col-md-5  pr-sm-0">
                <p class="ff-aalto-pans-pro-semiboldIt text-white fs-18">
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
        <div class="col-sm-6 col-md-5 offset-sm-1 pl-lg-5">
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

    <section class="pb-5 bg-cta-landing d-flex justify-content-center">
      <div class="col-12 col-sm-11 col-lg-7 d-flex flex-wrap space-section-top pb-5 mb-5">



        <h2 class="ff-flexo-bold fs-72 w-100 mb-lg-5 pb-lg-4 text-white text-center">
          Almacenamiento <br> All-Flash.
        </h2>
        <p class="ff-aalto-sans-pro-medium fs-18 text-white d-none d-lg-block text-center">
          Pure Storage® rediseña la arquitectura de almacenamiento en un modelo <strong>Evergreen™</strong> que
          habilita aplicaciones
          de última generación eliminando las costosas actualizaciones y disminuyendo los tiempos de espera.
        </p>
        <!--        <a href="#contact"-->
        <!--           class="arrow-after-text arrow-after-text-bold btn-radius btn-bordered-bottom-white px-0 py-2 mt-sm-2 mt-lg-4 btn-->
        <!--              fs-16 ff-aalto-sans-pro-medium">-->
        <!--          <p class="mx-0 mb-0">Contáctenos</p>-->
        <!--        </a>-->



      </div>
    </section>


    <section class="bg-gray-tn-land pt-5 pb-5">
      <div class="container1">
        <div class="d-flex flex-wrap  mt-sm-5 py-sm-5 space-section-bottom justify-content-center justify-content-sm-between">

          <div
            class="col-10 col-sm-6 col-md my-2 my-lg-0 col-lg border-radius-10 bg-white
            mx-3 mx-sm-2 py-5 px-lg-4 px-xl-5 d-flex d-sm-none d-md-flex flex-wrap justify-content-lg-center">
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
            class="col-10 col-sm-6 col-md my-2 my-lg-0 col-lg border-radius-10 bg-white
            mx-3 mx-sm-2 py-5 px-lg-4 px-xl-5 d-flex d-sm-none d-md-flex flex-wrap justify-content-lg-center">
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
              class="col-10 col-sm-6 my-2 my-lg-0 col-lg ml-sm-0 border-radius-10 bg-white
              mx-3 mr-sm-2 py-5 px-lg-5 d-flex flex-wrap justify-content-lg-center">
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
              class="col-10 col-sm-6 my-2 my-lg-0 col-lg border-radius-10 bg-white
              mx-3 mx-sm-2 py-5 px-lg-5  d-flex flex-wrap justify-content-lg-center">
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
            class="col-10 col-md col-sm-12 my-2 my-lg-0 col-lg border-radius-10 bg-white
            mx-3 mx-sm-0 mx-md-2 py-5 px-lg-4 px-xl-5
            ">
            <div class="d-flex flex-wrap justify-content-lg-center">
              <div class="col-4 col-sm-2 col-md-4 px-1">
                <img width="72" height="72" class="check-land" src="../assets/img/svg/tn-check-landing.svg"
                     alt="Industria 1">
              </div>
              <div class="col-10 col-sm-8 col-md-10 col-lg-8 d-flex mt-3 mt-lg-0">
                <h3 class="ff-aalto-sans-pro-medium fs-18  mb-0 mt-1 pr-md-4 pr-lg-0">
                  Cero inversiones desperdiciadas
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="d-flex justify-content-center flex-wrap ">
        <div class="col-11 col-lg-8 col-xl-6 d-flex justify-content-center flex-wrap space-section-bottom">
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
<!--          <b-carousel-slide>-->
<!--            <div class="d-flex justify-content-center">-->
<!--              <div class="inner-slider col-12 col-lg-5 px-4">-->
<!--                <img src="../assets/img/svg/tn-nissan-opinion.svg" alt="" width="75">-->
<!--                <p class="ff-aalto-sans-pro-regular fs-26 text-black my-4 py-2">-->
<!--                  "Solo la solución que nos ofreció <strong>TNetworks</strong> puede-->
<!--                  cumplir con el rendimiento que necesitamos”.</p>-->
<!--                <p class="ff-aalto-sans-pro-semibold fs-18 fs-xs-18 text-black mb-0">Vladimir Putin</p>-->
<!--                <p class="ff-aalto-sans-pro-semibold fs-18 fs-xs-18 text-orange-tn">Director Comercial</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </b-carousel-slide>-->
          <b-carousel-slide>
            <div class="d-flex justify-content-center">
              <div class="inner-slider col-12 col-lg-5 px-4">
                <img src="../assets/img/svg/tn-nissan-opinion.svg" alt="" width="75">
                <p class="ff-aalto-sans-pro-regular fs-26 text-black my-4 py-2">
                  "Solo la solución que nos ofreció <strong>TNetworks</strong> puede
                  cumplir con el rendimiento que necesitamos”.</p>
                <p class="ff-aalto-sans-pro-semibold fs-18 fs-xs-18 text-black mb-0">Antonio López</p>
                <p class="ff-aalto-sans-pro-semibold fs-18 fs-xs-18 text-orange-tn">Director Comercial</p>
              </div>
            </div>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </section>
    <div id="contact"></div>
    <section class="py-sm-5 pt-5">
      <div class="d-flex flex-wrap container2 py-5">
<!--        <div class="col-12 col-sm-4 col-md-5 text-center col-sm-4 mb-4 mb-sm-0 avatar-contact-container">-->
<!--          <img class=" avatar-contact" src="../assets/img/fet-tn-1.jpg" alt="Fernanda Peña">-->
<!--        </div>-->
<!--        <div class="col-12 col-sm-7 col-md-6 ml-sm-5 px-0 d-flex align-items-center justify-content-end">-->
<!--          <FormInscription :versionForm="'landing'" class="landing"></FormInscription>-->
<!--        </div>-->
        <div class="col-12 col-sm-7 col-md-12 px-0 d-flex align-items-center justify-content-end">
          <FormInscription :versionForm="'landing'" class="landing"></FormInscription>
        </div>
      </div>
    </section>
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
        title: "Landing PureStorage",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Con tecnología de almacenamiento All-Flash diga adiós a las costosas actualizaciones, incrementando en 2.5 veces la eficiencia de almacenamiento."
          },
          {
            property: "og:description",
            content:
              "Con tecnología de almacenamiento All-Flash diga adiós a las costosas actualizaciones, incrementando en 2.5 veces la eficiencia de almacenamiento.",
            vmid: "og:description"
          },
          {
            property: "og:url",
            content: "http://tnetworks.com.mx/landing-page",
            vmid: "og:url"
          },
          {
            property: "og:image",
            content: "http://tnetworks.com.mx/image-meta.jpg",
            // content: this.socialImg,
            vmid: "og:image"
          },
          {
            property: "og:title",
            content: "Tnetworks | Landing PureStorage",
            vmid: "og:title"
          },
          {
            property: "og:type",
            content: "website",
            vmid: "og:type"
          },
          {
            property: "og:site_name",
            content: "Tnetworks",
            vmid: "og:title"
          },
          {
            property: "twitter:card",
            content: "summary_large_image",
            vmid: "twitter:card"
          },
          {
            property: "twitter:image",
            content: "http://tnetworks.com.mx/image-meta.jpg",
            // content: this.socialImg,
            vmid: "twitter:image"
          },
          {
            property: "twitter:title",
            content: "Tnetworks | Landing PureStorage",
            vmid: "twitter:title"
          },
          {
            property: "twitter:description",
            content:
              "Con tecnología de almacenamiento All-Flash diga adiós a las costosas actualizaciones, incrementando en 2.5 veces la eficiencia de almacenamiento.",
            vmid: "twitter:description"
          }
        ]
      };
    }
  }
</script>

<style scoped>

</style>
