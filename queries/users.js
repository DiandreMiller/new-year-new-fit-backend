const db = require("../db/dbConfig");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return { allUsers };
  } catch (error) {
    return { error };
  }
};

const getUser = async (id) => {
  try {
    const result = await db.oneOrNone("SELECT * FROM users WHERE id=$1", id);
    return { result };
  } catch (error) {
    return { error };
  }
};

const createUser = async (user) => {
  try {
    const newUser  = await db.one(
      `INSERT INTO 
          users (username, dateofbirth, age, height, weight, workout_type, 
              gender, fitness_level, photo_link)
          VALUES 
              ($1, $2, $3, $4, $5, $6, $7, $8, $9)
              RETURNING *; `,
      [
        user.username,
        user.dateofbirth,
        user.age,
        user.height,
        user.weight,
        user.workout_type,
        user.gender,
        user.fitness_level,
        user.photo_link,
      ]
    );
    return { newUser };
  } catch (error) {
    return { error: error };
  }
};


const updateUser = async (id, user) => {
  try {
    const updatedUser = await db.one(
      "UPDATE users SET  username=$1, dateofbirth=$2, age=$3, height=$4, weight=$5, workout_type=$6, gender=$7, fitness_level=$8, photo_link=$9 WHERE id=$10 RETURNING *",
      [
        user.username,
        user.dateofbirth,
        user.age,
        user.height,
        user.weight,
        user.workout_type,
        user.gender,
        user.fitness_level,
        user.photo_link,
        id,
      ]
    );
    return { updatedUser };
  } catch (error) {
    return { error: error };
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      id
    );
    return { deletedUser };
  } catch (error) {
    return { error: error };
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
