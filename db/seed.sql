\c fitness_dev

INSERT INTO users (username, dateofbirth, age, height, weight, workout_type, gender, fitness_level, photo_link)
VALUES
    ('Diandre Miller', '1993-09-03', 29, 69, 158, 'Weightlifting', 'Male', 'Intermediate', 'https://protofactor.biz/site/wp-content/uploads/2020/01/FAT_OGRE_RENDER.jpg'),
    ('Brittney Coburn', '1997-07-24', 25, 64, 120, 'Cardio', 'Female', 'Advanced', 'https://lorethrill.com/wp-content/uploads/2023/01/Female-Ogre-Cartoon-1-1024x683.png?ezimgfmt=rs:332x221/rscb1/ngcb1/notWebP');

INSERT INTO workouts (name, duration, calories_burned, user_id, workout_type, workout, weight_pounds_lifted, workout_reps)
VALUES
    ('Bench Press', '1 hour', 300, 1, 'Weightlifting', '3 sets of 10 reps', 185, 10),
    ('Running', '30 minutes', 250, 2, 'Cardio', '5 km run', 0, 0);



