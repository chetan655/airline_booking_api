const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");

async function createAirplane(req, res) {
    try {
        // console.log("first", req.body);
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "successfully created airplane",
            data: airplane,
            error: {},
        });
    } catch (error) {
        console.log("error", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "failed to create airplane",
            data: {},
            error: error,
        });
    }
}

module.exports = {
    createAirplane,
};
