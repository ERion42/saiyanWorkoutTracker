const router = require("express").Router();
const Workout = require("../models/workout.js");
const Transaction = require("../models/workout.js");

// routes stuff goes here
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// 

router 

module.exports = router;