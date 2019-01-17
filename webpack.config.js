// On PhpStorm, when ussing with laravel mix, for Alias path resolving in components you have to:
// - create a webpack.config.js file separately like:

const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': path.resolve(__dirname, './resources/js')
    }
  }
};
