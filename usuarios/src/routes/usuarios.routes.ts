import { Router } from "express";

import { registro } from "../controllers/usuarios.controller.ts";

const router = Router();

//Endpoint para obtener todos los productos
router.get("/registro", registro);

export default router;