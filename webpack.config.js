module.exports = {
  entry: './block-extended.jsx',
  output: {
    path: __dirname,
    filename: 'block-extended.js',
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
