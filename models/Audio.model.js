const mongoose = require("mongoose");

const AudioSchema = mongoose.Schema({
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date_of_upload: { type: Date, default: Date.now },
  media: [{ type: String, required: true, trim: true }],
  title: { type: String, required: true, trim: true },

});

module.exports = mongoose.model("Audio", AudioSchema);