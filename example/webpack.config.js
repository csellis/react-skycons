const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: 'assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['react', 'env'],
          plugins: ['transform-class-properties', 'transform-object-rest-spread']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
