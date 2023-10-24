const Joi = require('joi');

const createWorkoutSchema = Joi.object({
    body: Joi.object({
        name: Joi.string().required(),
        mode: Joi.string().required(),
        equipment: Joi.array().items(Joi.string()).required(),
        exercises: Joi.array().items(Joi.string()).required(),
        trainerTips: Joi.array().items(Joi.string()).required(),
    }).required(),
}).unknown();

module.exports = {
    createWorkoutSchema,
};
