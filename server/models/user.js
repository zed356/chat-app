const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
