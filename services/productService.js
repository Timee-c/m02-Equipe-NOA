let products = [];

const unitService = require('./unitService.js');
const brandService = require('./brandService.js');
const subGrupoService = require('./subGroupService.js');

module.exports = {
  getProducts: () => {
    let productsFormatted = products.map(product => {
      // Cria uma cópia profunda do objeto product
      let productCopy = JSON.parse(JSON.stringify(product));
      // Obtém o subgrupo, mraca e unidade pelo ID
      let subgrupo = subGrupoService.getSubGroupById(productCopy.id_product_subgroup);
      let marca = brandService.getBrandById(productCopy.id_product_brand);
      let unidade = unitService.getUnitById(productCopy.id_product_unit);
      // Atualiza o productId na cópia do usuário se necessário
      if (productCopy.id_product_subgroup != subgrupo) {
        productCopy.id_product_subgroup = subgrupo;
      }
      if (productCopy.id_product_brand != marca) {
        productCopy.id_product_brand = marca;
      }
      if (productCopy.id_product_unit != unidade) {
        productCopy.id_product_unit = unidade;
      }
      return productCopy;
    });
    return productsFormatted;
  },
  getProductById: (id) => {
    let product = products.find(product => product.id === id);
    // Cria uma cópia profunda do objeto product
    let productCopy = JSON.parse(JSON.stringify(product));
    // Obtém o subgrupo, mraca e unidade pelo ID
    let subgrupo = subGrupoService.getSubGroupById(productCopy.id_product_subgroup);
    let marca = brandService.getMarcaById(productCopy.id_product_brand);
    let unidade = unitService.getUnitById(productCopy.id_product_unit);
    // Atualiza o productId na cópia do usuário se necessário
    if (productCopy.id_product_subgroup != subgrupo) {
      productCopy.id_product_subgroup = subgrupo;
    }
    if (productCopy.id_product_brand != marca) {
      productCopy.id_product_brand = marca;
    }
    if (productCopy.id_product_unit != unidade) {
      productCopy.id_product_unit = unidade;
    }
    return productCopy;
  },
  getProductsListLength: () => {
    return products.length;
  },
  addProduct: (product) => {
    products.push(product);
    brandService.addLinkedBrandId(parseInt(product.id_product_brand));
    unitService.addLinkedUnitId(parseInt(product.id_product_unit));
    subGrupoService.addLinkedSubGroupId(parseInt(product.id_product_subgroup));
  },
  updateProduct: (id, newproduct) => {
    product = products.find(item => item.id == id);
    toUpdate = product;
    toUpdate.id_product_subGroup = newproduct.id_product_subGroup;
    toUpdate.id_product_brand = newproduct.id_product_brand;
    toUpdate.id_product_unit = newproduct.id_product_unit;
    toUpdate.name = newproduct.name;
    toUpdate.gtin = newproduct.gtin;
    toUpdate.value = newproduct.value;
    toUpdate.registration_date = newproduct.registration_date;
    return toUpdate
  },
  deleteProduct: (id) => {
    product = products.find(x => x.id == id)
    if (product) {
      if(products.length > 1) {
        products.filter(item => item.id != product.id);
      } else {
        products.pop();
      }
      brandService.removeLinkedBrandId(product.id_product_brand);
      unitService.removeLinkedUnitId(product.id_product_unit);
      subGrupoService.removeLinkedSubGroupId(product.id_product_subgroup);
    } else {
      throw new Error("Produto não encontrado.")
    }
  },
};