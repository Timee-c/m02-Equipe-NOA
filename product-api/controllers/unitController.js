const express = require('express');
const router = express.Router();
const unitService = require('../services/unitService.js');

router.get('/', (req, res) => {
  res.send(unitService.getUnities());
});

// Rota para consultar uma unit pelo ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const unit = unitService.getUnitById(id);
  if (unit) {
    res.send(unit);
  } else {
    res.status(404).send('unit não encontrado');
  }
});

// Rota para adicionar uma nova unidade
router.post('/', (req, res) => {
  const { abbreviation, description } = req.body;
  let id = (unitService.getUnitiesListLength() + 1);
  newUnit = { id, abbreviation, description };
  unitService.addUnit(newUnit);
  res.send('Unidade adicionada com sucesso');
});

// Rota para atualizar uma unidade existente
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const newunit = req.body;
  unitService.updateUnit(id, newunit);
  res.send('Unidade atualizada com sucesso');
});

// Rota para excluir uma unidade pelo ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  let response = unitService.deleteUnit(id);
  if (response != "") {
    res.status(404).send(response);
  } else {
    res.send('Unidade excluída com sucesso');
  }
});

module.exports = router;