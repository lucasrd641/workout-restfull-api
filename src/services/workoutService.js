const workoutRepository = require("../repositories/workoutRepository");
const { v4: uuid } = require("uuid");
const getAllWorkouts = async () => {
    const allWorkouts = await workoutRepository.getAllWorkouts();
    return allWorkouts;
};

const getOneWorkout = () => {
    return;
};

const createNewWorkout = async (workout) => {
    const newWorkout = {
        ...workout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    }
    const createdWorkout = await workoutRepository.createNewWorkout(newWorkout);
    return createdWorkout;
};

const updateOneWorkout = () => {
    return;
};

const deleteOneWorkout = () => {
    return;
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
