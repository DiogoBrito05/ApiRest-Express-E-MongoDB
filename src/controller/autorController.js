import { autor } from '../models/Autor.js';

class AutorController {

    static async listaAutores(req, res){
        try {
            const listaLivros = await autor.find({});
            res.status(200).json(listaLivros)
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha na requisição`})
        }
    }


    static async cadastraAutores(req, res){
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Criado com sucesso", autor: novoAutor})
       } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao cadastrar autor`})
        }
    }


    static async buscaAutorPorId(req, res){
        try {
            const id = req.params.id;
            const livroEncontrado = await autor.findById(id);
            res.status(200).json(livroEncontrado)
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha na requisição do livro`})
        }
    }

    static async atualizarAutor (req, res) {
        try {
          const id = req.params.id;
          await autor.findByIdAndUpdate(id, req.body);
          res.status(200).json({ message: "livro atualizado" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    };

    static async deletaAutor(req, res) {
        try {
          const id = req.params.id;
          await autor.findByIdAndDelete(id);
          res.status(200).json({ message: "Livro Deletado" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    };
};

export default AutorController;