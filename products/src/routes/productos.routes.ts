import { Router } from "express";

import { getAll } from "../controllers/productos.controllers.ts";

const router = Router();

//Endpoint para obtener todos los productos
router.get("/all", getAll);

export default router;