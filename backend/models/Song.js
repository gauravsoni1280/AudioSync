const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  party: { type: mongoose.Schema.Types.ObjectId, ref: 'Party', required: true },
  title: String,
  url: String,
  upvotes: { type: Number, default: 0 },
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  isPlaying: { type: Boolean, default: false },
  isPaid: { type: Boolean, default: false },
});

module.exports = mongoose.model('Song', songSchema);
