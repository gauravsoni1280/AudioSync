const Song = require('../models/Song');

exports.addSong = async (req, res) => {
  try {
    const { party, title, url, addedBy } = req.body;
    const song = await Song.create({ party, title, url, addedBy });
    res.status(201).json(song);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.upvoteSong = async (req, res) => {
  try {
    const { songId } = req.body;
    const song = await Song.findByIdAndUpdate(songId, { $inc: { upvotes: 1 } }, { new: true });
    res.status(200).json(song);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getQueue = async (req, res) => {
  try {
    const { partyId } = req.params;
    const queue = await Song.find({ party: partyId }).sort({ upvotes: -1 });
    res.status(200).json(queue);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
