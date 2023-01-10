const producto = {
  nombre: 'manzana',
  categoria: 'frutas',
  precio: 1.99,
  nutrientes: {
    carbs: 0.95,
    grasas: 0.3,
    proteina: 0.2
  }
}

console.log(producto['nutrientes'].proteina)