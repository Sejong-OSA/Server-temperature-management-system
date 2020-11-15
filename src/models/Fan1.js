import mongoose from "mongoose";

const Fan1Schema = mongoose.Schema({
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

const model = mongoose.model("Fan1", Fan1Schema);

export default model;
