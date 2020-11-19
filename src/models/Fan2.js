import mongoose from "mongoose";

const Fan2Schema = mongoose.Schema({
  dataType: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Fan2", Fan2Schema);

export default model;
