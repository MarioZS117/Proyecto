//import { Request, Response } from "express";

import e from "express";

export const registro = (req: any, res: any) => {
    // res.send("Lista de productos ");
    return res.status(200).json({
        mesagge: "Registro de usuarios"});
}

export const consultorio = (req: any, res: any) => {
    return res.status(200).json([
        {
            id: "1",
            nombre: "Dr. Ana López",
            especialidad: "Neurología"
        },
        {
            id: "2",
            nombre: "Dr. Juan Ozorio",
            especialidad: "Traumatología"
        }
    ]);
}