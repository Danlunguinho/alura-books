import express from "express"
import LivroController from "../controllers/livrosController.js"
import paginar from "../middlewares/paginar.js"

const router = express.Router()

//Rotas para Livros
router
  .get("/livros", LivroController.listarLivros, paginar)
  .get("/livros/busca", LivroController.buscarLivro, paginar)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)

export default router