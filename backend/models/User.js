const mongoose = require("mongoose");

const { Schema } = mongoose;

const { partySchema } = require("./Party");

const userSchema = new Schema(
  {
    login: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    parties: {
      parties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Party' }],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
