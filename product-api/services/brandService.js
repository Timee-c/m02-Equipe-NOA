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

  updateBrand: (id, newbrand) => {
    brands = brands.map(brand => {
      if (brand.id === id) {
        return { ...brand, ...newbrand };
      }
      return brand;
    });
  },

  deleteBrand: (id) => {
    let isBrandLinked = false;
    let response = "";
    brand = brands.filter(brand => brand.id !== id);
    if (brand) {
      linkedBrandsId.forEach(element => {
        if (element == brand[0].id) {
          isBrandLinked = true;
          response = ("Marca vinculada a algum produto.") 
        }
      });
      if(isBrandLinked == false) {
        brands.splice(brand.id, 1);
      }
    } else {
      response = ("Marca não encontrada.");
    }
    return response;
  },
};