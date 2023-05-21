const Joi = require('joi')
const createValidator = require('./createValidator')

const userWorkoutSchema = Joi.object({
    name: Joi.string().required(),
    duration: Joi.string().required(),
    calories_burned: Joi.number().required(),
    workout_type: Joi.string().required(),
    workout: Joi.string().required(),
    weight_pounds_lifted: Joi.number(),
    workout_reps: Joi.number().required()
})

module.exports = createValidator(userWorkoutSchema)