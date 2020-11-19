import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: String,
});

const model = mongoose.model("Device", deviceSchema);

export default model;
