const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  status: {
    type: String,
    enum: [
      "Incomplete",
      "Registered",
      "Waitlisted",
      "Accepted",
      "Confirmed",
      "Denied"
    ],
    default: "Incomplete"
  },
  statusChangedAt: {
    type: Date
  },
  confirmationToken: {
    type: String
  },
  firstName: {
    type: String,
    max: 20
  },
  lastName: {
    type: String,
    max: 20
  },
  email: {
    type: String,
    ref: "users"
  },
  phoneNumber: {
    type: String,
    max: 12
  },
  dateOfBirth: {
    type: Date
  },
  shirtSize: {
    type: String,
    enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL"]
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other", "Prefer not to say"]
  },
  ethnicity: {
    type: String,
    max: 20
  },
  github: {
    type: String
  },
  linkedin: {
    type: String
  },
  website: {
    type: String
  },
  school: {
    type: String,
    max: 30
  },
  graduationYear: {
    type: String,
    max: 4
  },
  levelOfStudy: {
    type: String,
    enum: ["Undergraduate", "Graduate", "High School"]
  },
  major: {
    type: String,
    max: 30
  },
  dietaryRestrictions: {
    type: String,
    default: "None",
    max: 200
  },
  specialNeeds: {
    type: String,
    default: "None",
    max: 200
  },
  emergencyName: {
    type: String,
    max: 20,
    required: true
  },
  emergencyNumber: {
    type: String,
    max: 20,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
