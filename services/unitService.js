let unities = [];
let linkedUnitiesId = [];

module.exports = {
  removeLinkedUnitId: (id) => {
    linkedUnitiesId.splice(id,1);
  },
  addLinkedUnitId: (id) => {
    linkedUnitiesId.push(id);
  },
  getUnities: () => {
    return unities;
  },
  getUnitById: (id) => {
    unit = unities.find(unit => unit.id === id);
    if(unit) {
      return unit;
    }
  },
  getUnitiesListLength: () => {
    return unities.length;
  },
  addUnit: (unit) => {
    unities.push(unit);
  },
  updateUnit: (id, newunit) => {
    unit = unities[(id-1)];
    toUpdate = unit;
    toUpdate.abbreviation = newunit.abbreviation;
    toUpdate.description = newunit.description;
    return toUpdate
  },
  deleteUnit: (id) => {
    let isUnitLinked = false;
    let response = "";

    let unit = unities.find(x => x.id == id)
    if (unit) {
      if (linkedunitiesId.length > 0) {
        linkedunitiesId.forEach(element => {
          if (element == unit.id) {
            isUnitLinked = true;
            response = ("Unidade vinculada a algum Produto.")
          }
          if (isUnitLinked == false) {
            if (unities.length <= 1) {
              unities.pop();
            } else {
              if (unit) {
                unities = unities.filter(item => item.id != unit.id)
              }
            }}});
      } else {
        if (unities.length <= 1) {
          unities.pop();
        } else {
          let unit = unities.find(x => x.id == id)
          if (unit) {
            unities = unities.filter(item => item.id != unit.id)
          } 
        }
      }
    } else {
      response = ("Unidade não encontrada.");
    }
    return response;
  },
};