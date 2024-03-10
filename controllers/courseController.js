const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  try {
    const { name, maxSeats, startDate } = req.body;
    const course = await Course.create({ name, maxSeats, startDate });
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, maxSeats, startDate } = req.body;
    const course = await Course.findByPk(id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    course.name = name;
    course.maxSeats = maxSeats;
    course.startDate = startDate;
    await course.save();
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
