import mongoose from "mongoose";

const Dht11Schema = mongoose.Schema({
  // tmp: {
  //   type: String,
  //   required: true,
  // },
  // hum: {
  //   type: String,
  //   required: true,
  // },
  data: {
    type: String,
    required: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Dht11", Dht11Schema);

export default model;
