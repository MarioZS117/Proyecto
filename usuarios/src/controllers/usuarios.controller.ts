//import { Request, Response } from "express";

export const registro = (req: any, res: any) => {
    // res.send("Lista de productos ");
    return res.status(200).json({
        mesagge: "Registro de usuarios"});
}