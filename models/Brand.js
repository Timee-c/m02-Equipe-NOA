class Brand {
  constructor(id, name, description) {
    this.id = id;
    this.setName(name)
    this.setDescription(description)
  }

  setName(name) {
    if (typeof name === 'string' && name.trim().length > 0) {
      this.name = name;
    }
    else {
      throw new Error('Invalid name');
    }
  }

  setDescription(description) {
    if (description && description.length > 0) {
      this.description = description;
    } else {
      throw new Error('Invalid description');

    }
  }
}

module.exports = Brand;