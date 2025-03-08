const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: '/src/background.js', // Entry point for your background script
  output: {
    filename: 'background.bundle.js',  // Bundled output file
    path: path.resolve(__dirname, 'dist'),  // Output directory for bundled files
  },
  resolve: {
    extensions: ['.js'],  // Allow importing .js files
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Use Babel to transpile JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'production', // Set mode to production for optimized output
};
