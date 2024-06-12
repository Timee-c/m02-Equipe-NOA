const express = require('express');
const router = express.Router();
const productService = require('../services/productService');
const brandService = require('../services/brandService');
const groupService = require('../services/groupService');
const subGroupService = require('../services/subGroupService');
const unitService = require("../services/unitService");

router.get('/', (req, res) => {
  res.send(productService.getProducts());
});

// Rota para consultar um product pelo ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = productService.getProductById(id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send('Produto não encontrado');
  }
});

// Rota para adicionar um novo product
router.post('/', (req, res) => {
  const { id_product_subgroup, id_product_brand, id_product_unit, name, gtin, value, registration_date } = req.body;
  let id = (productService.getProductsListLength() + 1);
  newProduct = { id, id_product_subgroup, id_product_brand, id_product_unit, name, gtin, value, registration_date};
  productService.addProduct(newProduct);
  res.send('Produto adicionado com sucesso').status(201);
});

// Rota para atualizar um product existente
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const newProduct = req.body;
  productService.updateProduct(id, newProduct);
  res.send('product atualizado com sucesso');
});

// Rota para excluir um product pelo ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  productService.deleteProduct(id);
  res.send('product excluído com sucesso');
});

module.exports = router;