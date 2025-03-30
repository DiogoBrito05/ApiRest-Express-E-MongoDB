import express from 'express';
import LivroController from '../controller/livroController.js';

const routes = express.Router();


routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.buscaLivroPorId);
routes.get("/livros/busca", LivroController.listarLivrosPorEdtora);
routes.post("/livros", LivroController.cadastraLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletaLivro);

export default routes;