const db = require("../db/dbConfig")

const getUserWorkouts = async () => {
    try {
        const allWorkouts = await db.any('SELECT * FROM workouts')
        return { allWorkouts }  
    } catch (error) {
        return {error}
   }
};


const getUserWorkout = async (id) => {
    try {
      const result = await db.oneOrNone("SELECT * FROM workouts WHERE id=$1", id);
      return { result };
    } catch (error) {
      return { error };
    }
};
  
const createWorkout = async (workout) => {
    try {
      const newWorkout  = await db.one(
        `INSERT INTO 
            workouts (name, duration, calories_burned, workout_type, workout,  
                weight_pounds_lifted, workout_reps)
            VALUES 
                ($1, $2, $3, $4, $5, $6, $7)
                RETURNING *; `,
        [
          workout.name,
          workout.duration,
          workout.calories_burned,
          workout.workout_type,
          workout.workout,
          workout.weight_pounds_lifted,
          workout.workout_reps,

        ]
      );
      return { newWorkout };
    } catch (error) {
      return { error: error };
    }
};
  
const updateWorkout = async (id, workout) => {
    try {
      const updatedWorkout = await db.one(
        "UPDATE workouts SET name=$1, duration=$2, calories_burned=$3,  workout_type=$4, workout=$5, weight_pounds_lifted=$6, workout_reps=$7 WHERE id=$8 RETURNING *",
        [
            workout.name,
            workout.duration,
            workout.calories_burned,
            workout.workout_type,
            workout.workout,
            workout.weight_pounds_lifted,
            workout.workout_reps,
          id,
        ]
      );
        console.log('yea',updatedWorkout)
      return { updatedWorkout };
    } catch (error) {
      return { error: error };
    }
};
  
const deleteWorkout = async (id) => {
    try {
      const deletedWorkout = await db.one(
        "DELETE FROM users WHERE id=$1 RETURNING *",
        id
      );
      return { deletedWorkout };
    } catch (error) {
      return { error: error };
    }
  };

module.exports = {
    getUserWorkouts,
    getUserWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout 
}