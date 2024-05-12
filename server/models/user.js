const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  college: String,
  dept: String,
  mobile: Number,
  dob: String,
  district: String,
  state: String,
  country: String,
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
