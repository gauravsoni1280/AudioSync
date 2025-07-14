const Party = require('../models/Party');

exports.createParty = async (req, res) => {
  try {
    const { name, code, createdBy } = req.body;
    const party = await Party.create({ name, code, createdBy });
    res.status(201).json(party);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.joinParty = async (req, res) => {
  try {
    const { code } = req.body;
    const party = await Party.findOne({ code });
    if (party) {
      res.status(200).json(party);
    } else {
      res.status(404).json({ error: 'Party not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getParties = async (req, res) => {
  try {
    const parties = await Party.find();
    res.status(200).json(parties);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
