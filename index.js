import {
  seleccionarCantidadGustos,
  ingresarCliente,
  seleccionarProducto,
  seleccionarSabores,
} from "./dataEntry.js";

import fs from "fs";

// Cargar sabores y productos
// COMPLETEN USTEDES
let sabores = fs.readFileSync("data/sabores.json", "utf-8");
sabores = JSON.parse(sabores);
let productos = fs.readFileSync("data/productos.json", "utf-8");
productos = JSON.parse(productos);

// Ingresar cliente
let cliente = ingresarCliente();
// Elegir producto
let producto = seleccionarProducto(productos);
// Elegir cantidad de gustos
let gustos = seleccionarCantidadGustos(producto.maxGustos);
// Elegir sabores
let saboresElegidos = seleccionarSabores(sabores, gustos);
// Guardar pedido
// COMPLETEN USTEDES
let nuevoPedido ={
  cliente: cliente,
  producto: producto,
  sabores: saboresElegidos
}
let pedidos = JSON.parse(fs.readFileSync("data/pedidos.json", "utf-8"));
pedidos.push(nuevoPedido);
fs.writeFileSync("data/pedidos.json", JSON.stringify(pedidos, null, 2), "utf-8");