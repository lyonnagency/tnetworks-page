
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: '',
    titleTemplate: 'Tnetwors | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'theme-color', name: 'theme-color', content: '#26006E' },
      { hid: 'msapplication-navbutton-color', name: 'msapplication-navbutton-color', content: '#26006E' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: '#26006E' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]

//     <!-- Chrome, Firefox OS and Opera -->
// <meta name="theme-color" content="#4285f4">
// <!-- Windows Phone -->
// <meta name="msapplication-navbutton-color" content="#4285f4">
// <!-- iOS Safari -->
// <meta name="apple-mobile-web-app-status-bar-style" content="#4285f4"></meta>
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/validate'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  // Axios
  axios: {
    // proxyHeaders: false
    // baseUrl:''
  },
  server:{
    host:'192.168.1.72'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   transpile: ["vee-validate/dist/rules"],
    extend (config, ctx) {
    }
  }
}
