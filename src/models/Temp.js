import mongoose from "mongoose";

const TempSchema = mongoose.Schema({
  // tmp: {
  //   type: String,
  //   required: true,
  // },
  // hum: {
  //   type: String,
  //   required: true,
  // },
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

const model = mongoose.model("Temp", TempSchema);

export default model;
