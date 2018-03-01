module.exports = {
  entry: {
    'block-extended': './block-extended.jsx',
    'block-csv': './block-csv.jsx'
  },
  output: {
    path: __dirname,
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ['.js', '.jsx']
  }
};
