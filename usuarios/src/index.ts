import express from 'express';
import dotenv from "dotenv";
import { usuariosRoutes } from '/home/Proyecto/usuarios/src/routes/index.ts'; 
dotenv.config({path:"/home/Proyecto/usuarios/.env"});
 
const app = express();
const port = process.env.PORT || 3002;


app.get("/",(req,res)=>{
    res.send("usuarios corriendo " + port);
});
app.use("/usuarios",usuariosRoutes);

app.use("/consultorio",usuariosRoutes);

app.listen(port,()=>{
  console.log("Mi primer Servicio de usuarios!",port);
});