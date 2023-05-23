const Joi = require('joi')
const createValidator = require('./createValidator')

const userSchema = Joi.object({
    username: Joi.string().required(),
    dateofbirth: Joi.string().required(),
    age: Joi.number().required(),
    height: Joi.alternatives().try(
        Joi.number().required(),
        Joi.string().required()
      ),
    weight: Joi.number().required(),
    workout_type: Joi.string().optional(),
    gender: Joi.string().required(),
    fitness_level: Joi.string().required(),
    photo_link: Joi.string().optional()
})

module.exports = createValidator(userSchema)
