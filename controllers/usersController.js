const express = require("express");
const users = express.Router();
const validateUsers = require('../validators/validateUsers')
const userWorkouts = require('./userWorkouts')

const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../queries/users');



users.use('/:userId/workouts', userWorkouts)

users.get('/', async (request, response) => {
    const { error, allUsers } = await getAllUsers()
    if (error) {
        response.status(500).json({error: error})
    } else {
        response.status(200).json(allUsers)
    }
})

users.get("/:id", async (request, response) => {
    const { id } = request.params;
    const { error, result } = await getUser(id);
    if (error) {
        response.status(404).json({ error: "User Not Found" });
    } else if (error) {
        response.status(500).json({ error: "Server Error" });
    } else {
        response.status(200).json(result);
    }
});


users.post("/", validateUsers, async (request, response) => {
    const { error, newUser } = await createUser(request.body);
    if (error) {
        response.status(500).json({ error: "Server Error" });
    } else {
        response.status(201).json(newUser);
    }
});


users.put("/:id", validateUsers, async (request, response) => {
    const { id } = request.params;
    const { error, updatedUser } = await updateUser(id, request.body);
    if (error) {
        response.status(500).json({ error: "Server Error" });
    } else {
        response.status(200).json(updatedUser)
    }
});


users.delete("/:id", async (request, response) => {
    const { id } = request.params;
    const { error, deletedUser } = await deleteUser(id);
    if (error) {
        response.status(404).json("User Not Found");
    } else {
        response.status(201).json(deletedUser);
    }
});

module.exports = users;