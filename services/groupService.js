let groupList = [];
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
  getGroupById(id) { return groupList.find(group => group.id === id) },

  findGroupById: (id) => groupList.find(group => group.id === id),

  updateGroup: (id, newGroup) => {
    group = groupList[(id - 1)];
    toUpdate = group;
    toUpdate.name = newGroup.name
    toUpdate.description = newGroup.description
    return toUpdate
  },

  deleteGroupById: (id) => {
    let isGroupLinked = false;
    let response = "";

    let group = groupList.find(x => x.id == id)
    if (group) {
      if (linkedGroupsId.length > 0) {
        linkedGroupsId.forEach(element => {
          if (element == group.id) {
            isGroupLinked = true;
            response = ("Grupo vinculado a algum Sub Grupo.")
          }
          if (isGroupLinked == false) {
            if (groupList.length <= 1) {
              groupList.pop();
            } else {
              if (group) {
                groupList = groupList.filter(item => item.id != group.id)
              }
            }}});
      } else {
        if (groupList.length <= 1) {
          groupList.pop();
        } else {
          let group = groupList.find(x => x.id == id)
          if (group) {
            groupList = groupList.filter(item => item.id != group.id)
          } 
        }
      }
    } else {
      response = ("Grupo não encontrado.");
    }
    return response;
  }
}
