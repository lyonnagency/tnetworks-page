<template>
  <div
    v-scroll="handleScroll"
    ref="menuHeaderRef"
    class="d-relative menu-wrapper"
  >
    <b-navbar  toggleable="sm" type="dark" class="menu-header px-0 container1">
      <nuxt-link to="/" class="text-item brand-icon">
        <img
          width="130"
          src="~assets/img/svg/tnetworks-logo.svg"
          alt="Oseznos logo header"
          class="d-lg-none"
        />
        <img src="https://tracker.metricool.com/c3po.jpg?hash=1fbaffd28a1ceb4f4805657758028bb3"/>
      </nuxt-link>
      <b-navbar-toggle
        target="nav-collapse"
        @click="menuClick"
        ref="nav-collapse">
        <menuIicon >
        </menuIicon>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="">
        <div class="d-flex w-100 flex-wrap  mt-4 mt-sm-0">
          <b-navbar-nav
            class="social-icons col-12 col-lg-6 align-items-center d-none d-lg-flex px-2"
            v-b-scrollspy
          >
            <b-nav-item to="/" class="d-none d-lg-block">
              <img
                src="~assets/img/svg/tnetworks-logo.svg"
                alt="Oseznos logo header"
                class="tnetworks-menu"
              />
            </b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav
            class="col-12 col-lg-6 justify-content-end align-items-center px-2 mt-4 mt-sm-0"
          >
            <b-nav-item-dropdown class="mt-1 my-sm-0" text="Servicios" right>
              <li class="nav-item">
                <a class="text-blue-tn" href="#digitalizacion" @click="scrollIntoView"> Digitalización </a>
              </li>
              <li class="nav-item">
                <a class="text-blue-tn" href="#industria">Industria 4.0</a>
              </li>
              <li class="nav-item">
                <a class="text-blue-tn" href="#datacenter"> Data center </a>
              </li>
            </b-nav-item-dropdown>

            <li class="nav-item my-1 my-sm-0">
              <a
                class="text-blue-tn py-2"
                href="#aboutus">
                Nosotros
              </a>
            </li>
            <li class="nav-item my-1 my-sm-0 fs-login-on-menu arrow-after-text btn-radius btn-blue p-2 ml-sm-3 ml-md-5 ml-lg-4 px-4 py-3 px-sm-3 px-lg-3">
              <a
                href="#contact">
                Contáctenos
              </a>
            </li>
          </b-navbar-nav>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Vue from "vue";
import menuIicon from "~/components/icons/menu";
Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});
export default {
  name: "SiteHeader",
  components:{
    menuIicon
  },
  data() {
    return {
      hederHeight: 10, // this data is setted manually
      headerElement: null,
      body:null,
    };
  },
  mounted() {
    // this.hederHeight = this.$refs.menuHeaderRef;
    this.headerElement = this.$refs.menuHeaderRef;
    this.body = document.body;
  },
  methods: {
    scrollIntoView(evt) {
      // evt.preventDefault();

      const href = evt.target.getAttribute('href')
      const el = href ? document.querySelector(href) : null
      console.log(el.offsetTop)
      console.log(this.body.scrollTop)
      if (el) {
        this.body.scrollTop = el.offsetTop
      }
    },

    // TODO
    // Add an remove the active class using the state of the button navbar-toggle from bootstrap
    menuClick() {
      if (this.headerElement.classList.contains("active-menu")) {
        setTimeout(() => {
          this.headerElement.classList.remove("active-menu");
        }, 300);
      } else {
        setTimeout(() => {
          this.headerElement.classList.add("active-menu");
        }, 100);
      }
    },
    handleScroll(evt, el) {
      if (
        window.scrollY > this.hederHeight &&
        !this.headerElement.classList.contains("fixed-menu")
      ) {
        this.headerElement.classList.add("fixed-menu");
      } else if (
        window.scrollY < this.hederHeight &&
        this.headerElement.classList.contains("fixed-menu")
      ) {
        this.headerElement.classList.remove("fixed-menu");
      }
    }
  }
};
</script>

<style></style>
