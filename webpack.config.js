const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // Arquivo principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Pasta de saída
    filename: 'bundle.js',
    clean: true, // Limpa a pasta dist antes de cada build
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Extensões suportadas
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Suporte a TypeScript
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/, // Suporte a JavaScript/React
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Suporte a CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          /node_modules[\\/]@emotion[\\/]is-prop-valid[\\/]node_modules[\\/]@emotion[\\/]memoize/,
          /node_modules[\\/]ansi-html-community/,
          /node_modules[\\/]gsap/,
          /node_modules[\\/]webpack/,
          /node_modules[\\/]react-dom[\\/]node_modules[\\/]scheduler/,
          /node_modules[\\/]styled-components[\\/]node_modules[\\/]stylis/,
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Modelo de HTML
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000, // Porta do servidor
    hot: true,
  },
  mode: 'development', // Ambiente de desenvolvimento
};
