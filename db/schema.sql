DROP DATABASE IF EXISTS fitness_dev;
CREATE DATABASE fitness_dev;

\c fitness_dev;

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 username TEXT NOT NULL,
 dateofbirth TEXT NOT NULL,
 age INTEGER NOT NULL,
 height NUMERIC NOT NULL,
 weight NUMERIC NOT NULL,
 workout_type TEXT NOT NULL,
 gender TEXT NOT NULL,
 fitness_level TEXT NOT NULL,
--  photo_upload BYTEA,
 photo_link TEXT
);

CREATE TABLE workouts (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 duration TEXT,
 calories_burned NUMERIC NOT NULL,
 user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
 workout_type TEXT NOT NULL,
 workout TEXT NOT NULL,
 weight_pounds_lifted NUMERIC,
 workout_reps NUMERIC NOT NULL
);