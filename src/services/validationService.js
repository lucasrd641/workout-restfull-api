const Joi = require('joi');

const validateInput = async (input, schema) => {
    const validate = await schema.validate(input);
    console.log(validate);
    if (validate.error) {
        return {
            error: validate.error.name,
            message: validate.error.message,
        };
    }
    return null;
};

module.exports = {
    validateInput,
}
