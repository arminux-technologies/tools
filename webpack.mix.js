const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const config = require('./webpack.config')
mix.webpackConfig(config)
mix.options({
  extractVueStyles: false,
  processCssUrls: true,
  purifyCss: false,
  uglify: {
    uglifyOptions: {
      // fixes error on sweetalert2
      compress: {
        unused: false
      }
    }
  },
  postCss: []
})
mix.js('resources/js/app.js', 'public/js')
mix.stylus('resources/style/app.styl', 'public/css')
mix.sourceMaps()
mix.version()
if (mix.inProduction()) {
  /* extract all vendor */
  //! This Will Cause Error if You Are running 'npm run test'
  //! Only Use This For Production
  mix.extract([
    'axios',
    'vue',
    'vue-axios',
    'vue-i18n',
    'vue-router',
    'vuex',
  ])
  mix.version()
  mix.disableNotifications()
}