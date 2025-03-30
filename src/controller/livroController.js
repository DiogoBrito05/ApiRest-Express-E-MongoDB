import { autor } from '../models/Autor.js';
import livro from '../models/livro.js';

class LivroController {

    static async listarLivros(req, res){
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros)
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha na requisição`})
        }
    }


    static async cadastraLivro(req, res){
        const novoLivro = req.body;
        try {
           const autorEcontrado = await autor.findById(novoLivro.autor);
           const livroCompleto = {...novoLivro, autor:{...autorEcontrado._doc}}
           const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({message: "Criado com sucesso", livro: novoLivro})
       } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao cadastrar livro`})
        }
    }


    static async buscaLivroPorId(req, res){
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado)
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha na requisição do livro`})
        }
    }

    static async atualizarLivro (req, res) {
        try {
          const id = req.params.id;
          await livro.findByIdAndUpdate(id, req.body);
          res.status(200).json({ message: "livro atualizado" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    };

    static async deletaLivro (req, res) {
        try {
          const id = req.params.id;
          await livro.findByIdAndDelete(id);
          res.status(200).json({ message: "Livro Deletado" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    };
};

export default LivroController;