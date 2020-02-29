const path = require('path');

module.exports = {
  /* 
  * Arquivo de entrada
  */
  entry: path.resolve(__dirname, 'src', 'index.js'),

  /* 
  * Local onde ele vai jogar o codigo transpilado pelo WebPack
  * Codigo com as funcionalidades que o JS já entende
  */
  output: {
    // Local
    path: path.resolve(__dirname, 'public'),

    // Nome do arquivo
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },

  /* 
  * Regras, 
  */
  module: {
    rules: [
      {
        // Transpilar todos os arquivos .js
        test: /\.js$/,

        // Nao transpilar
        exclude: /node_modules/,

        // 
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};