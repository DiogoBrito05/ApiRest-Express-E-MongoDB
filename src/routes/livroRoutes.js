import express from 'express';
import LivroController from '../controller/livroController.js';

const routes = express.Router();


routes.get("/autores", LivroController.listarLivros);
routes.post("/autores", LivroController.cadastraLivro);
routes.get("/livros/:id", LivroController.buscaLivroPorId);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletaLivro);

export default routes;