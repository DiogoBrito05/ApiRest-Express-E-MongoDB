import express from 'express';
import conectNaDatabase from './config/dbconect.js';   
import routes from './routes/index.js';


const conexao = await conectNaDatabase();

conexao.on("error", (erro)=> {
    console.error("Erro de conexão", erro);  
})

conexao.once("open", ()=> {
    console.log("Conexao com o banco foi deita com sucesso");
    
})

const app = express();
routes(app);


/* app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("O Livro foi removido com sucesso!")
}) */



export default app;