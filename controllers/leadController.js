const Lead = require('../models/Lead');

exports.registerLead = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { name, email, phone, linkedIn } = req.body;
    const lead = await Lead.create({ name, email, phone, linkedIn, courseId });
    res.status(201).json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateLead = async (req, res) => {
  try {
    const { leadId } = req.params;
    const { status } = req.body;
    const lead = await Lead.findByPk(leadId);
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    lead.status = status;
    await lead.save();
    res.json(lead);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.searchLeads = async (req, res) => {
  try {
    const { q } = req.query;
    const leads = await Lead.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${q}%` } },
          { email: { [Op.like]: `%${q}%` } }
        ]
      }
    });
    res.json(leads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
