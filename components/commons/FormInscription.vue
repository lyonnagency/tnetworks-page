<template>
  <section class="form-inscriptions col-12 pr-0">
    <div class="form">
      <h3 class="fs-32 fs-xs-32 ff-flexo-bold text-blue-tn text-center text-sm-left ">¿Listo?, platiquemos.
        <br class="d-none d-sm-block">
        Le atiende Fernanda Peña.</h3>
      <p class="ff-flexo-bold fs-14 text-center text-sm-left mt-3 mt-md-4">CUSTOMER ADQUISITION MANAGER_</p>
      <ValidationObserver
        class="col-12 d-flex align-items-center pr-0 px-0 mt-5"
        v-slot="{ handleSubmit }">
        <form
          @submit.prevent="handleSubmit(sendMail)"
          class="d-flex flex-wrap col-12 pl-0"
          action="#"
          method="post"
        >
          <div class="col-12 d-flex flex-wrap px-0">
            <div class="col-12 col-lg-12 pl-sm-0 d-flex flex-wrap align-items-end">
              <ValidationProvider
                name="empresa"
                rules="required"
                v-slot="{ errors }"
                ref="empresaIn"
                class="col-12 col-lg-6 pl-sm-0 pr-lg-3"
              >
                <input
                  type="text"
                  placeholder="Empresa"
                  v-model="empresa"
                  class="input-tn pl-lg-0 mb-2"
                />
                <p class="color-purple ff-aalto-sans-pro-medium fs-12 text-error">{{ errors[0] }}</p>
              </ValidationProvider>
              <ValidationProvider
                name="Puesto"
                rules="required"
                v-slot="{ errors }"
                ref="puestoIn"
                class="col-12 col-lg-6 pl-sm-0 pl-lg-3"
              >
                <input
                  type="text"
                  placeholder="Puesto"
                  v-model="puesto"
                  class="input-tn pl-lg-0 mb-2"
                />
                <p class="color-purple ff-aalto-sans-pro-medium fs-12 text-error">{{ errors[0] }}</p>
              </ValidationProvider>

              <div class="col-12 col-lg-6 d-flex flex-wrap align-items-center pr-sm-0 pl-sm-0 justify-content-center justify-content-sm-start mt-4 mt-sm-0 mt-lg-3">
                <button type="submit" :class="'btn-form-'+versionForm" class="py-3 btn-radius btn-blue py-2 btn fs-14 fs-lg-16 ff-aalto-sans-pro-medium arrow-after-text mt-sm-3">
                  <p class="mx-3 mb-0">Contáctenos</p>
                </button>
              </div>
            </div>
            <div class="col-12 d-flex px-0 mt-3">
              <span v-show="mailStatus" class="col-12 text-center text-sm-left ff-aalto-sans-pro-medium fs-18 color-purple mt-2 px-0">
                Gracias por ponerte en contacto, nos comunicaremos a la brevedad
              </span>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </section>
</template>

<script>
  export default {
    name: "FormInscription",
    methods: {
      async sendMail() {
        let mailData = {};
        this.mailStatus = false;
        mailData = {mail: this.mail};
        let formD = new FormData();
        formD.append("puesto", this.puesto);
        formD.append("empresa", this.empresa);
        console.log(this.verForm);
        formD.append("form_type", this.verForm);

        // formD.append("namePlayer", this.playerNameOsezno);
        // formD.append("phone", this.phoneOsezno);
        this.msgButton = "Enviando...";
        await this.$axios
          .$post("http://oseznos.com.mx/tn-inscription.php", formD)
          .then(response => {
            console.log(response);
            if (response.code == 200) {
              this.mailStatus = true;
              this.puesto = "";
              this.empresa = "";
              this.playerNameOsezno = "";
              this.phoneOsezno = "";
              this.$refs.empresaIn.reset();
              this.$refs.puestoIn.reset();
              // this.$refs.playerNameOsezno.reset();
              // this.$refs.phoneIn.reset();
              this.msgButton = "Solicitar más informes a mi correo";
            }
          });
      }
    },
    data() {
      return {
        mailStatus: false,
        puesto: "",
        empresa: "",
        phoneOsezno: "",
        playerNameOsezno: "",
        msgButton: "Solicitar más informes a mi correo",
        verForm:this.versionForm
      };
    },
    props:{
      versionForm:{
        type: String,
        default:''
      }
    }
  }
</script>

<style scoped>

</style>
