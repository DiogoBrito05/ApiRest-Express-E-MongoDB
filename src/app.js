import express from 'express';
import conectNaDatabase from './config/dbconect.js';   
import livro from "./models/livro.js"

const conexao = await conectNaDatabase();

conexao.on("error", (erro)=> {
    console.error("Erro de conexão", erro);  
})

conexao.once("open", ()=> {
    console.log("Conexao com o banco foi deita com sucesso");
    
})

const app = express();
app.use(express.json());


// app.get("/", (req, res)=> {
//     res.status(200).send("Curso de Node.js")
// })

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros)
})

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index])
});

app.post("/livros", (req, res) =>{
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!")
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("O Livro foi removido com sucesso!")
})



export default app;