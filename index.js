const express = require("express");


const Contenedor = require('./Contenedor');

const server = express();


const contenedor = new Contenedor('./productos.json');

const PORT = 8080;


server.get('/productos', async (req, res) => {
  const getProducts = await contenedor.getAll();
  res.send(getProducts); 
})
server.get('/productosRandom', async (req, res) => {
  const productos = await contenedor.getAll();
  function getNumRandom(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
  }  
  const getResult = getNumRandom(0, productos.length, -1); 
  res.send(productos[getResult]);
})


const serverOn = () => {
  console.log(`Se inició el servidor en el puerto n° > [${PORT}] <`)
};

server.listen(PORT, serverOn);

server.on('error', (error) => console.log(' Error', error));