const { AirplaneRepo } = require("../respositories");

const airplaneRepository = new AirplaneRepo();
async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createAirplane,
};
