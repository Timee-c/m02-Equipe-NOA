let brands = [];
let linkedBrandsId = [];

module.exports = {
  removeLinkedBrandId: (id) => {
    linkedBrandsId.splice(id,1);
  },
  addLinkedBrandId: (id) => {
    linkedBrandsId.push(id);
  },
  getBrands: () => {

    return brands;
  },
  getBrandById: (id) => {
    let brand = brands.find(brand => brand.id === id);
    if (brand) {
      return { ...brand };
    }
    else {
      throw new Error('Not found');
    }
  },
  getBrandsListLength: () => {
    return brands.length;
  },

  addBrand: (brand) => {
    brands.push(brand);
  },

  updateBrand: (id,newBrand) => {
    brand = brands[(id-1)];
    toUpdate = brand;
    toUpdate.name = newBrand.name
    toUpdate.description = newBrand.description
    return toUpdate
  },

  deleteBrand: (id) => {
    let isBrandLinked = false;
    let response = "";

    let brand = brands.find(x => x.id == id)
    if (brand) {
      if (linkedBrandsId.length > 0) {
        linkedBrandsId.forEach(element => {
          if (element == brand.id) {
            isBrandLinked = true;
            response = ("Unidade vinculada a algum Produto.")
          }
          if (isBrandLinked == false) {
            if (brands.length <= 1) {
              brands.pop();
            } else {
              if (brand) {
                brands = brands.filter(item => item.id != brand.id)
              }
            }}});
      } else {
        if (brands.length <= 1) {
          brands.pop();
        } else {
          let brand = brands.find(x => x.id == id)
          if (brand) {
            brands = brands.filter(item => item.id != brand.id)
          } 
        }
      }
    } else {
      response = ("Unidade não encontrada.");
    }
    return response;
  },
};