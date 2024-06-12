const express = require('express');
const router = express.Router();
const brandController = require('../services/brandService.js');

router.get('/', (req, res) => {
  res.send(brandController.getBrands());
});

// Rota para consultar uma brand pelo ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const brand = brandController.getBrandById(id);
  if (brand) {
    res.send(brand);
  } else {
    res.status(404).send('Marca não encontrada');
  }
});

// Rota para adicionar uma nova brand
router.post('/', (req, res) => {
  const { name, description } = req.body;
  let id = (brandController.getBrandsListLength() + 1);
  let newBrand = { id, name, description };
  brandController.addBrand(newBrand);
  res.send('Marca adicionada com sucesso');
});

// Rota para atualizar uma brand existente
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const newBrand = req.body;
  brandController.updateBrand(id, newBrand);
  res.send('Marca atualizada com sucesso');
});

// Rota para excluir uma brand pelo ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  let response = brandController.deleteBrand(id);
  if (response != "") {
    res.status(404).send(response);
  } else {
    res.send('Marca excluída com sucesso');
  }
});

module.exports = router;