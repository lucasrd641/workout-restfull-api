const workoutService = require("../services/workoutService");
const { validateInput } = require("../services/validationService");
const { createWorkoutSchema } = require("../models/workoutSchema");
const getAllWorkouts = async (req, res) => {
    const allWorkouts = await workoutService.getAllWorkouts();
    res.status(200).json(allWorkouts);
};

const getOneWorkout = async (req, res) => {
    const workout = workoutService.getOneWorkout();
    res.send("Get an existing workout");
};

const createNewWorkout = async (req, res) => {
    try {
        const validationError = await validateInput(req, createWorkoutSchema);
        if (validationError) return res.status(412).json(validationError);
        const createdWorkout = await workoutService.createNewWorkout(req.body);
        res.status(201).json(createdWorkout);
    } catch (e) {
        res.status(500).json(e.message);
    }

};

const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout();
    res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout();
    res.send("Delete an existing workout");
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
