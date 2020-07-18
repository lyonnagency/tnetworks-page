<template>
  <section class=" form-inscriptions">
    <div class="form">
      <h3 class="fs-28 ff-flexo-bold text-blue-tn">¿Listo?, platiquemos. <br>
        Le atiende Fernanda Peña.</h3>
      <p class="ff-flexo-bold fs-14">CUSTOMER ADQUISITION MANAGER_</p>
      <ValidationObserver
        class="col-12 d-flex align-items-center pr-0 px-0 mt-5"
        v-slot="{ handleSubmit }">
        <form
          @submit.prevent="handleSubmit(sendMail)"
          class="d-flex flex-wrap"
          action="#"
          method="post"
        >
          <div class="col-12 d-flex flex-wrap px-0">
            <div class="col-12 col-lg-12 pl-0 d-flex">
              <ValidationProvider
                name="empresa"
                rules="required|alpha_spaces"
                v-slot="{ errors }"
                ref="empresaIn"
                class="col-4 pl-0"
              >
                <input
                  type="text"
                  placeholder="Empresa"
                  v-model="empresa"
                  class="input-tn pl-4 pl-lg-0"
                />
                <p class="color-purple ff-flexo-bold fs-12">{{ errors[0] }}</p>
              </ValidationProvider>
              <ValidationProvider
                name="Puesto"
                rules="required"
                v-slot="{ errors }"
                ref="puestoIn"
                class="col-4"
              >
                <input
                  type="text"
                  placeholder="Puesto"
                  v-model="puesto"
                  class="input-tn pl-4 pl-lg-0"
                />
                <span class="color-purple ff-flexo-bold fs-12">{{ errors[0] }}</span>
              </ValidationProvider>

              <div class="col-4 d-flex flex-wrap px-0 align-items-center">
                <button type="submit" class="btn-square btn-blue  py-2 btn fs-16 ff-flexo-bold arrow-after-text">
                  <p class="mx-2 mb-0">contactar</p>
                </button>
              </div>
            </div>
            <div class="col-12">
              <span v-show="mailStatus" class="col-12 ff-bebas fs-18 color-purple mt-2">
                Gracias por ponerte en contacto, nos comunicaremos a la brevedad
              </span>
            </div>
            <!--            <div class="col-12 col-lg-6 d-flex align-items-end flex-wrap">-->
            <!--              <ValidationProvider-->
            <!--                name="Nombre de jugador"-->
            <!--                rules="required|alpha_spaces"-->
            <!--                v-slot="{ errors }"-->
            <!--                ref="playerNameOsezno"-->
            <!--                class="w-100"-->
            <!--              >-->
            <!--                <input-->
            <!--                  type="text"-->
            <!--                  placeholder="Escribe tu nombre de jugador"-->
            <!--                  v-model="playerNameOsezno"-->
            <!--                  class="input-oseznos input-purple pl-4 pl-lg-0"-->
            <!--                />-->
            <!--                <span class="color-purple ff-bebas fs-12">{{ errors[0] }}</span>-->
            <!--              </ValidationProvider>-->
            <!--              <ValidationProvider-->
            <!--                name="teléfono"-->
            <!--                :rules="{-->
            <!--                    regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,-->
            <!--                    required: true-->
            <!--                 }"-->
            <!--                v-slot="{ errors }"-->
            <!--                ref="phoneIn"-->
            <!--                class="w-100"-->
            <!--              >-->
            <!--                <input-->
            <!--                  type="text"-->
            <!--                  v-model="phoneOsezno"-->
            <!--                  placeholder="Escribe tu teléfono"-->
            <!--                  class="input-oseznos input-purple pl-4 pl-lg-0"-->
            <!--                />-->
            <!--                <span class="color-purple ff-bebas fs-12">{{ errors[0] }}</span>-->
            <!--              </ValidationProvider>-->
            <!--            </div>-->
          </div>
          <!--          <div class="col-4 mt-5 d-flex flex-wrap px-0 align-items-center">-->
          <!--            <div-->
          <!--              class="col-12 col-sm-8 col-md-6 col-lg-4 d-flex justify-content-lg-end justify-content-center justify-content-sm-start flex-wrap py-2">-->
          <!--              <button type="submit" class="btn-radius btn-blue  py-2 btn fs-16 ff-flexo-bold arrow-after-text">-->
          <!--                <p class="mx-2 mb-0">contactar</p>-->
          <!--              </button>-->
          <!--            </div>-->
          <!--                        <div class="d-flex d-lg-none col-12 col-sm-7 col-md-7 col-lg-6 justify-content-center justify-content-sm-start  py-2 px-0 pl-3">-->
          <!--                          <span class="check-list mr-lg-3 mr-3 mr-sm-2"></span>-->
          <!--                          <h3 class="font-italic ff-bebas fs-18 color-purple mb-0">-->
          <!--                            Me gustaría recibir novedades a mi correo-->
          <!--                          </h3>-->
          <!--                        </div>-->
          <!--            <span v-show="mailStatus" class="col-12 ff-bebas fs-18 color-purple mt-2">-->
          <!--                Gracias por ponerte en contacto, nos comunicaremos a la brevedad-->
          <!--            </span>-->
          <!--          </div>-->
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
        msgButton: "Solicitar más informes a mi correo"
      };
    }
  }
</script>

<style scoped>

</style>
