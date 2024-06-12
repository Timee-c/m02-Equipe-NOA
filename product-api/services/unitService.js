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
    unities = unities.map(unit => {
      if (unit.id === id) {
        return { ...unit, ...newunit };
      }
      return unit;
    });
  },
  deleteUnit: (id) => {
    let isUnitLinked = false;
    let response = "";
    unit = unities.filter(unit => unit.id !== id);
    if (unit) {
      linkedUnitiesId.forEach(element => {
        if (element == unit[0].id) {
          isUnitLinked = true;
          response = ("Unidade vinculada a algum produto.") 
        }
      });
      if(isUnitLinked == false) {
        unities.splice(unit.id, 1);
      }
    } else {
      response = ("Unidade não encontrada.");
    }
    return response;
  },
};