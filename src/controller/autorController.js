import Autor from '../models/Autor.js';

class AutorController {

    static async listaAutores(req, res){
        try {
            const listaLivros = await Autor.find({});
            res.status(200).json(listaLivros)
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha na requisição`})
        }
    }


    static async cadastraAutores(req, res){
        try {
            const novoLivro = await Autor.create(req.body);
            res.status(201).json({message: "Criado com sucesso", livro: novoLivro})
       } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao cadastrar livro`})
        }
    }


    static async buscaAutorPorId(req, res){
        try {
            const id = req.params.id;
            const livroEncontrado = await Autor.findById(id);
            res.status(200).json(livroEncontrado)
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha na requisição do livro`})
        }
    }

    static async atualizarAutor (req, res) {
        try {
          const id = req.params.id;
          await Autor.findByIdAndUpdate(id, req.body);
          res.status(200).json({ message: "livro atualizado" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    };

    static async deletaAutor(req, res) {
        try {
          const id = req.params.id;
          await Autor.findByIdAndDelete(id);
          res.status(200).json({ message: "Livro Deletado" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    };
};

export default AutorController;