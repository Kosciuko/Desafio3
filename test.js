const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('./productos.json');

contenedor.save({
  item:"Mouse",
  marca:"Razer",
  precio:"7299.99"
})