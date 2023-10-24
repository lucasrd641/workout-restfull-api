const DB = require("./mockData.json");

const getAllWorkouts = () => {
    return DB.workouts;
};

module.exports = { getAllWorkouts };
