import express from 'express';
import dotenv from "dotenv";
dotenv.config({path:"/home/Proyecto/api_gateway/src/.env"});
 
const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("productos corriendo " + port);
});
app.listen(port,()=>{
  console.log("Mi primer Servicio de Productos!",port);
});