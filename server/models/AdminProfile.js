const mongoose = require("mongoose");
const adminProfileSchema = new mongoose.Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  MobileNumber: { type: Number, required: false },
  email: { type: String, required: false },
  destination: { type: String, required: false },
  age: { type: Number, required: false },
  gender: { type: String, required: false },
  currentLocation: { type: String, required: false },
  workDetails: {
    totalExperience: { type: Number, required: false },
    workingHrs: { type: Number, required: false },
    from: { type: Date, required: false },
    to: { type: Date, required: false },
    baseCharges: { type: Number, required: false },
  },
});

mongoose.model('adminProfilDetails', adminProfileSchema);