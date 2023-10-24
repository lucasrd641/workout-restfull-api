const Joi = require('joi');

const validateInput = async (input, schema) => {
    try {
        await Joi.validate(input, schema.params);
        return null;
    } catch (err) {
        return {
            error: err.name,
            message: err.details[0].message,
        };
    }
};
