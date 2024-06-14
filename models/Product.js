class Product {
    constructor(id, id_product_subgroup, id_product_brand, id_product_unit, name, gtin, value, registration_date) {
        this.id = id,
        this.setName(name),
        this.id_product_subgroup = id_product_subgroup,
        this.id_product_brand = id_product_brand,
        this.id_product_unit = id_produto_unidade,
        this.setGtin(gtin),
        this.setValue(value),
        this.setRegistrationDate(registration_date)
    }

    setName(name) {
        if(name && name.length > 0) {
            this.name = name;
        } else {
            throw new Error('Invalid name');
        }
    }
    setGtin(gtin) {
        if(gtin && gtin.length > 0) {
            this.gtin = gtin;
        } else {
            throw new Error('Invalid gtin');
        }
    }
    setValue(value) {
        if(value && value >= 0) {
            this.value = value;
        } else {
            throw new Error('Invalid value');
        }
    }
    setRegistrationDate(registration_date) {
        if(registration_date) {
            this.registration_date = registration_date;
        } else {
            throw new Error('Invalid registration date');
        }
    }
}

module.exports = Product;