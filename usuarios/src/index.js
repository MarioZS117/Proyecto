"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "/home/Proyecto/usuarios/src/.env" });
const app = (0, express_1.default)();
const port = process.env.PORT || 3002;
app.get("/", (req, res) => {
    res.send("productos corriendo " + port);
});
app.listen(port, () => {
    console.log("Mi primer Servicio de Productos!", port);
});
