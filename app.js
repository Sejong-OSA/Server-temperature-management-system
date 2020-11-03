import express from 'express';
import dotenv from 'dotenv';

import './db';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

const home = app.get("/",(req,res)=>{
  res.send("hiasd");
})

const handleListening = ()=>{
  console.log(`✅Listening on: http://localhost:${PORT}`);
}

app.listen(PORT,handleListening);