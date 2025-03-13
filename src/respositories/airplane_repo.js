const crudRepo = require("./crud_repo");
const { Airplane } = require("../models");
// const Airplane = require("../models/airplane");

class AirplaneRepo extends crudRepo {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepo;
