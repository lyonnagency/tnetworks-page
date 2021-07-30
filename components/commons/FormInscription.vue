<template>
  <section class="form-inscriptions col-12 pr-0">
    <div class="form">
      <h3 class="fs-32 fs-xs-32 ff-flexo-bold text-blue-tn text-center text-sm-left ">
<!--        Platique con nuestra Customer Adquisition Manager Fernanda Peña-->
        ¿Listo?, platiquemos
        </h3>
<!--      <p class="ff-flexo-bold fs-14 text-center text-sm-left mt-3 mt-md-4">CUSTOMER ADQUISITION MANAGER_</p>-->
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
                name="nombre"
                rules="required"
                v-slot="{ errors }"
                ref="nombreIn"
                class="col-12 col-lg-6 pl-sm-0  py-0 py-lg-2"
              >
                <input
                  type="text"
                  placeholder="Nombre"
                  v-model="nombre"
                  class="input-tn pl-lg-0 mb-2"
                />
                <p class="color-purple ff-aalto-sans-pro-medium fs-12 text-error">{{ errors[0] }}</p>
              </ValidationProvider>
              <ValidationProvider
                name="telefono"
                :rules="{
                    regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                    required: true
                  }"
                v-slot="{ errors }"
                ref="telefonoIn"
                class="col-12 col-lg-6 pl-sm-0 pl-lg-3 py-0 py-lg-2"
              >
                <input
                  type="text"
                  placeholder="Teléfono"
                  v-model="telefono"
                  class="input-tn pl-lg-0 mb-2"
                />
                <p class="color-purple ff-aalto-sans-pro-medium fs-12 text-error">{{ errors[0] }}</p>
              </ValidationProvider>
              <ValidationProvider
                name="email"
                rules="required|email"
                v-slot="{ errors }"
                ref="emailIn"
                class="col-12 col-lg-6 pl-sm-0 py-0 py-lg-2"
              >
                <input
                  type="text"
                  placeholder="Correo electrónico"
                  v-model="mailInput"
                  class="input-tn pl-lg-0 mb-2"
                />
                <p class="color-purple ff-aalto-sans-pro-medium fs-12 text-error">{{ errors[0] }}</p>
              </ValidationProvider>
              <ValidationProvider
                name="empresa"
                rules="required"
                v-slot="{ errors }"
                ref="empresaIn"
                class="col-12 col-lg-6 pl-sm-0 pl-lg-3 py-0 py-lg-2"
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
                name="puesto"
                rules="required"
                v-slot="{ errors }"
                ref="puestoIn"
                class="col-12 col-lg-6 pl-sm-0  py-0 py-lg-2"
              >
                <input
                  type="text"
                  placeholder="Puesto"
                  v-model="puesto"
                  class="input-tn pl-lg-0 mb-2"
                />
                <p class="color-purple ff-aalto-sans-pro-medium fs-12 text-error">{{ errors[0] }}</p>
              </ValidationProvider>
              <!-- Inputs added  -->
              <ValidationProvider
                name="mensaje"
                rules="required"
                v-slot="{ errors }"
                ref="mensajeIn"
                class="col-12 col-lg-6 pl-sm-0 pl-lg-3 py-0 py-lg-2"
              >
                <textarea
                  type="text"
                  placeholder="Mensaje"
                  v-model="mensaje"
                  class="input-tn pl-lg-0"
                  rows="1"
                />
                <p class="color-purple ff-aalto-sans-pro-medium fs-12 text-error">{{ errors[0] }}</p>
              </ValidationProvider>

              <div class="col-12 col-lg-6 d-flex flex-wrap align-items-center pr-sm-0 pl-sm-0 justify-content-center justify-content-sm-start mt-4 mt-sm-0 mt-lg-3">
                <button type="submit" :class="'btn-form-'+versionForm" class="py-3 btn-radius btn-blue py-2 btn fs-14 fs-lg-16 ff-aalto-sans-pro-medium arrow-after-text mt-sm-3">
                  <p class="mx-3 mb-0">{{msgButton}}</p>
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
        formD.append("nombre", this.nombre);
        formD.append("telefono", this.telefono);
        formD.append("email", this.mailInput);
        formD.append("mensaje", this.mensaje);
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
              this.puesto = "";
              this.empresa = "";
              this.nombre = "";
              this.telefono = "";
              this.mailInput = "";
              this.mensaje = "";

              this.$refs.empresaIn.reset();
              this.$refs.puestoIn.reset();

              this.$refs.nombreIn.reset();
              this.$refs.telefonoIn.reset();
              this.$refs.emailIn.reset();
              this.$refs.mensajeIn.reset();
              // this.$refs.playerNameOsezno.reset();
              // this.$refs.phoneIn.reset();
              this.msgButton = "Enviar mensaje";

              console.log(this.verForm)
              this.$router.push('/thank-you')
              this.mailStatus = true;
              // if (this.verForm=='landing') {
              //   this.$router.push('gracias-almacenamiento-all-flash')
              // }else {
              //   this.$router.push('thank-you')
              // }
                //
              //
            }
          });
      }
    },
    data() {
      return {
        mailStatus: false,
        puesto: "",
        empresa: "",

        nombre: "",
        telefono: "",
        mailInput: "",
        mensaje: "",

        msgButton: "Enviar mensaje",
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
