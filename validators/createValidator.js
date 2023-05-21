const createValidator = (schema) => (request, response, next) => {
    const { error } = schema.validate(request.body);
    if (error) {
        return response.status(400).json({ error: error.message });
    }
    next();
};

module.exports = createValidator;