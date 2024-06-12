const express = require('express');
const router = express.Router();
const subGroupService = require('../services/subGroupService');

router.get('/', (req, res) => {
  res.send(subGroupService.getSubGroupList());
});

// Rota para consultar um product pelo ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const subGroup = subGroupService.getSubGroupById(id)

  if (!subGroup) {
    res.status(404).send('Sub Grupo não encontrado')
    return
  }

  res.send(subGroup)
});

router.post('/', (req, res) => {
  const { idGroup, name, description } = req.body;
  let id = (subGroupService.getSubGroupsListLength() + 1);
  newSubGroup = { id, idGroup, name, description };
  res.status(201).send(subGroupService.addSubGroup(newSubGroup))
});

router.put('/:id', (req, res) => {
  const { idGroup, name, description } = req.body;
  let id = (subGroupService.getSubGroupsListLength() + 1);
  newSubGroup = { id, idGroup, name, description };

  if (!subGroupService.getSubGroupById(id)) {
    res.status(404).send('Sub Grupo não encontrado')
    return
  }
  res.send(subGroupService.updateSubGroup(subGrup))
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  if (!subGroupService.getSubGroupById(id)) {
    res.status(404).send('Sub Grupo não encontrado')
    return
  }
  let response = subGroupService.deleteSubGroupById(id);
  if (response != "") {
    res.status(404).send(response);
  } else {
    res.send('Sub Grupo excluído com sucesso');
  }
});

module.exports = router;