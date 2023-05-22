const express = require('express')
const cors = require('cors')

const usersController = require('./controllers/usersController')
const userWorkouts = require('./controllers/userWorkouts')

const app = express()

app.use(cors())
app.use(express.json());

app.get('/', (request, response) => {
    response.send('New Year New Fit')
})

app.use('/users', usersController)
app.use('/workouts', userWorkouts)





app.get("*", (request, response) => {
    response.status(404).send("Page Not Found");
});

module.exports = app;