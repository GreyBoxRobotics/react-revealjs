const path = require("path");

module.exports = {
  entry : {
      demoBundle: path.join(__dirname, 'src', 'demo.js'),
  },
  output : {
      filename : '[name].js',
      path : path.join(__dirname, 'public', 'dist')
  },
  module : {
    rules : [
      {
          test : /\.js$/,
          exclude : /node_modules/,
          loader : 'babel-loader'
      }
    ]
  }
}
