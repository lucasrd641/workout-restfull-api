const Joi = require('joi');

const createWorkoutSchema = Joi.object({
    body: Joi.object({
        name: Joi.string().required(),
        mode: Joi.string().required(),
        equipment: Joi.string().required(),
        exercises: Joi.string().required(),
        trainerTips: Joi.string().required(),
    })
});

module.exports = {
    createWorkoutSchema,
};
