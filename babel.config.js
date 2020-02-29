module.exports = {
  presets: [
    /* 
    * Responsavel por alterar as funcionalidades do JavaScript
    * Export, import, arrow functions, classes
    */
    "@babel/preset-env", 

    /*
    * Transformar as coisas que o navegador nao entende do React.
    * Funcionalidades exclusivas do react.
    */
    "@babel/preset-react",
  ],
};