const groupList = [];
let linkedGroupsId = [];

module.exports = {
  removeLinkedGroupId: (id) => {
    linkedGroupsId.splice(id, 1);
  },
  addLinkedGroupId: (id) => {
    linkedGroupsId.push(id);
  },
  getGroupList: () => groupList,

  addGroup: (group) => {
    groupList.push(group)
    return newGroup
  },
  getGroupsListLength: () => {
    return groupList.length;
  },
  getGroupById: (id) => groupList.find(group => group.id === id),

  findGroupById: (id) => groupList.find(group => group.id === id),

  updateGroup: (newGroup) => {
    const toUpdate = getGroupById(newGroup.id)
    toUpdate.name = newGroup.name
    toUpdate.description = newGroup.description
    return toUpdate
  },

  deleteGroupById: (id) => {
    let isGroupLinked = false;
    let response = "";
   
    let group = groupList.find(x => x.id == id)
    if (group) {

      linkedGroupsId.forEach(element => {
        if (element == group.id) {
          
          isGroupLinked = true;
          response = ("Grupo vinculado a algum Sub Grupo.")
        }
      });
      if (isGroupLinked == false) {
        groupList.splice((group.id - 1), 1)
      }
    } else {
      response = ("Grupo não encontrado.");
    }
    return response;
  }
}