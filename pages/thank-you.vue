<template>
  <div class="cont d-flex justify-content-center align-items-center min-vh-100 ">
    <img src="https://tracker.metricool.com/c3po.jpg?hash=1fbaffd28a1ceb4f4805657758028bb3"/>
    <div class="col-12 col-md-8 d-flex justify-content-center align-items-center flex-wrap">
      <h2 class="ff-flexo-bold fs-50-land w-100 mb-5 text-blue-tn text-center">
        Gracias, hemos recibido su información. <br>
        Nos comunicaremos a la brevedad
      </h2>
      <div class="col-12">
        <h3 class="ff-flexo-bold fs-16 text-blue-tn text-uppercase mb-4 fs-lg-23 text-center">
          Síganos en nuestras redes sociales y conozca más sobre digitalización
        </h3>
      </div>
      <div class="col-12">
        <div
          class="
          d-flex align-items-end  justify-content-center
            flex-wrap
          ">
          <a href="https://www.facebook.com/TNetworksmx/" target="_blank" class="faceb mx-4 ">
            <img
              src="~assets/img/svg/facebook.svg"
              alt="Facebook Tnetworks de Morelia"
            />
          </a>
          <a href="https://www.instagram.com/tnetworksmx/" target="_blank" class="insta mx-4 ">
            <img
              src="~assets/img/svg/instagram.svg"
              alt="Instagram Tnetworks"
            />
          </a>
          <a class="wp-link whats mx-4 " target="_blank"
             href="https://www.linkedin.com/company/t-networksmx/">
            <img
              src="~assets/img/svg/linkedin.svg"
              alt="Whatsapp Tnetworks"/>
          </a>
        </div>
      </div>

      <nuxt-link to="/">
        <img
          width="180"
          src="~assets/img/svg/tnetworks-logo.svg"
          alt="Oseznos logo header"
          class="mt-5"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "thank-you"
  }
</script>

<style scoped>

</style>
