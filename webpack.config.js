const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'node', // Necesario para que Webpack entienda que es una app Node.js
  externals: {
    // Excluye bcrypt, node-pre-gyp y cualquier otro módulo que Webpack no deba incluir
    'bcrypt': 'commonjs bcrypt',
    '@mapbox/node-pre-gyp': 'commonjs @mapbox/node-pre-gyp',
    'nock': 'commonjs nock'
  },
  mode: 'production', // Puede ser 'development' para entorno local
  resolve: {
    extensions: ['.js', '.json']
  }
};
