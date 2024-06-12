const subGroupList = [];
const linkedSubGroupIdList = []
const groupService = require('./groupService.js')


module.exports = {
  removeLinkedSubGroupId: (id) => {
    linkedSubGroupIdList.splice(id,1);
  },
  addLinkedSubGroupId: (id) => {
    linkedSubGroupIdList.push(id);
  },
  getSubGroupList: () => {
    responses = []
    
    subGroupList.forEach(subGroup => {
      const group = groupService.findGroupById(subGroup.idGroup)

      responses.push({
        id: subGroup.id,
        name: subGroup.name,
        description: subGroup.description,
        group: {
          id: group.id,
          name: group.name,
          description: group.description
        }
    })
  })
    return responses
  },
  getSubGroupsListLength: () => {
    return subGroupList.length;
  },
  addSubGroup: (subGroup) => {
    if (!groupService.getGroupById(parseInt(subGroup.idGroup))) return 'Grupo não encontrado'
    subGroupList.push(subGroup)
    groupService.addLinkedGroupId(parseInt(subGroup.idGroup));
  },

  findSubGroupById: (id) => subGroupList.find(subGroup => subGroup.id === id),

  getSubGroupById: (id) => {
    const subGroup = subGroupList.find(subGroup => subGroup.id === id)

    if (!subGroup) {
      throw new Error('Sub Grupo não encontrado');
    }

    const group = groupService.findGroupById(subGroup.idGroup);

    if (!group) {
      throw new Error('Grupo não encontrado');
    }

    const response = {
      
        id: subGroup.id,
        name: subGroup.name,
        description: subGroup.description,
        group: {
          id: group.id,
          name: group.name,
          description: group.description
        }
  
    };
    return response;
  },


  updateSubGroup: (newSubGroup) => {
    const toUpdate = subGroupList.find(subGroup => subGroup.id === id)
    toUpdate.name = newSubGroup.name
    toUpdate.description = newSubGroup.description
    return toUpdate
  },

  deleteSubGroupById: (id) => {
    let isSubGroupLinked = false;
    let response = "";
    subGroup = subGroupList.filter(subGroup => subGroup.id !== id);
    if (subGroup) {
      linkedSubGroupIdList.forEach(element => {
        if (element == subGroup.id) {
          isSubGroupLinked = true;
          response = ("Sub grupo vinculado a algum produto.") 
        }
      });
      if(isSubGroupLinked == false) {
        subGroupList.splice(subGroup.id, 1);
        groupService.removeLinkedGroupId(subGroup.idGroup);
      }
    } else {
      response = ("Sub grupo não encontrada.");
    }
    return response;
  }
}