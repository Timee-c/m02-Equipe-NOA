class Unit {
    constructor(id, abbreviation, description) {
        this.id = id,
            this.setAbbreviation(abbreviation),
            this.setDescription(description)
    }

    setAbbreviation(abbreviation) {
        if (abbreviation && abbreviation.length > 0) {
            this.abbreviation = abbreviation;
        } else {
            throw new Error('Invalid abbreviation');
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

module.exports = Unit;