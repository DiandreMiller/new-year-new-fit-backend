const express = require('express')
// const userWorkouts = express.Router({ mergeParams: true })
const userWorkouts = express.Router();

const {
    getUserWorkouts,
    getUserWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout 
} = require('../queries/usersWorkouts');
const validateUserWorkouts = require('../validators/validateUserWorkouts');

userWorkouts.get('/', async (request, response) => {
    const { error, allWorkouts } = await getUserWorkouts();
    console.log('wo',allWorkouts)
    if (error) {
        response.status(500).json({error: error})
    } else {
        response.status(200).json(allWorkouts)
    }
})

// users.get("/", async (req, res) => {
//     const { error, allUsers } = await getAllUsers();
//     if (error) {
//         res.status(500).json({ error: error })
//     } else {
//         res.status(200).json(allUsers);
//     }
// });

userWorkouts.get('/:id', async (request, response) => {
    const { id } = request.params;
    const { error, result } = await getUserWorkout(id);
    if (error) {
        response.status(404).json({ error: 'User Not Found' })
    } else if (error) {
        response.status(500).json({ error: 'Server Error' })
    } else {
        response.status(200).json(result)
    }
})

userWorkouts.post("/:id", validateUserWorkouts, async (request, response) => {
    const { error, newWorkout } = await createWorkout(request.body);
    if (error) {
        response.status(500).json({ error: "Server Error" });
    } else {
        response.status(201).json(newWorkout);
    }
});

userWorkouts.put("/:id", async (request, response) => {
    const { id } = request.params;
    const updatedWorkout  = await updateWorkout(id, request.body);
    const error = await updateWorkout(id, request.body)
    
    if (error.code) {
        response.status(500).json({ error: "Server Error" });
        console.log('nah',updatedWorkout)
    } else {
        response.status(201).json(updatedWorkout)
        console.log('update',updatedWorkout)
    }
});

userWorkouts.delete("/:id", async (request, response) => {
    const { id } = request.params;
    const { error, deletedWorkout } = await deleteWorkout(id);
    if (error) {
        response.status(404).json("User Not Found");
    } else {
        response.status(200).json(deletedWorkout);
    }
});







module.exports = userWorkouts

