import express from 'express';
import AutorController from '../controller/autorController.js';

const routes = express.Router();


routes.get("/autores", AutorController.listaAutores);
routes.post("/autores", AutorController.cadastraAutores);
routes.get("/autores/:id", AutorController.buscaAutorPorId);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.deletaAutor);

export default routes;