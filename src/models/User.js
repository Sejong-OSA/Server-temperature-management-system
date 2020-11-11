import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required:true,
    },
    age:{
      type:Number,
      min:17,
      max:60
    },
  },
  {
    timestamps:true
  }
);


const model = mongoose.model('User', UserSchema);

export default model;
