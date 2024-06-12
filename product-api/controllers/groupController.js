const express = require('express');
const router = express.Router();
const groupService = require('../services/groupService.js');

router.get('/', (req, res) => {
  res.send(groupService.getGroupList());
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const group = groupService.getGroupById(id)

  if (!group) {
    res.status(404).send('Grupo não encontrado')
    return
  }

  res.send(group)
});

router.post('/', (req, res) => {
  const { name, description } = req.body;
  let id = (groupService.getGroupsListLength() + 1);
  newGroup = { id, name,description};
  res.status(201).send(groupService.addGroup(newGroup))
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const group = req.body

  if(!groupService.getGroupById(id)){
    res.status(404).send('Grupo não encontrado')
    return
  }

  group.id = id
  res.send(groupService.updateGroup(group))
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  
  if(!groupService.getGroupById(id)){
    res.status(404).send('Grupo não encontrado')
    return
  }
  let response = groupService.deleteGroupById(id)
  if (response != "") {
    res.status(404).send(response);
  } else {
    res.send('Grupo excluído com sucesso');
  }
});

module.exports = router;