import express from 'express';
import dotenv from "dotenv";
import { productosRoutes } from './routes/index';

dotenv.config({path:"/home/Proyecto/Productos/src/.env"});
 
const app = express();
const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("productos corriendo " + port);
});

app.use("/productos",productosRoutes);

app.listen(port,()=>{
  console.log("Mi primer Servicio de Productos!",port);
});