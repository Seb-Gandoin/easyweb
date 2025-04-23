const mongoose = require('mongoose');

const landingPageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  content: {
    type: Object, // tu pourras stocker du JSON ici (ex: blocs de texte, images, etc.)
    default: {},
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('landingPage', landingPageSchema);
