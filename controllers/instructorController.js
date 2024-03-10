const Instructor = require('../models/Instructor');

exports.createInstructor = async (req, res) => {
  try {
    const { name, email } = req.body;
    const instructor = await Instructor.create({ name, email });
    res.status(201).json(instructor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { leadId } = req.params;
    const { comment } = req.body;
    const lead = await Lead.findByPk(leadId);
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    lead.comments.push(comment);
    await lead.save();
    res.json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
