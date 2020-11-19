import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: String,
  temp: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Temp",
    },
  ],
  hum: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hum",
    },
  ],
  fan1: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fan1",
    },
  ],
  fan2: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fan2",
    },
  ],
});

const model = mongoose.model("Device", deviceSchema);

export default model;
