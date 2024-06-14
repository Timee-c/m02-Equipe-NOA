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
    brand = brandList[(id-1)];
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
      if (linkedbrandsId.length > 0) {
        linkedbrandsId.forEach(element => {
          if (element == brand.id) {
            isBrandLinked = true;
            response = ("Marca vinculado a algum Produto.")
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
      response = ("Marca não encontrada.");
    }
    return response;
  },
};