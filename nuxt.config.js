module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "ctexxx",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "ctexxx" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat+Alternates|Raleway'}
    ]
  },

  manifest: {
    name: "ctexxx",
    author: "Moritz Ruth",
    mobileAppIOS: false,
    nativeUI: true,
    "short_name": "ctexxx"
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#c34545' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/global.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
    '@nuxtjs/pwa'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    },
    postcss: [
      require("autoprefixer")({
        browsers: ["last 5 versions"]
      })
    ]
  }
};
