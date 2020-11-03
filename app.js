import express from 'express';

const app = express();

const PORT = 4000;

const home = app.get("/",(req,res)=>{
  res.send("hiasd");
})

const handleListening = ()=>{
  console.log(`✅Listening on: http://localhost:${PORT}`);
}

app.listen(PORT,handleListening);