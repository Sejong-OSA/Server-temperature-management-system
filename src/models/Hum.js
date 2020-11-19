import mongoose from "mongoose";

const HumSchema = mongoose.Schema({
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

const model = mongoose.model("Hum", HumSchema);

export default model;
