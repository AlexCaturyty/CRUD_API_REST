const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Rota para criar uma nova categoria
router.post('/categorias', categoriaController.criarCategoria);

// Rota para listar todas as categorias
router.get('/categorias', categoriaController.listarCategorias);

// Rota para obter uma categoria por ID
router.get('/categorias/:id', categoriaController.obterCategoria);

// Rota para atualizar uma categoria por ID
router.put('/categorias/:id', categoriaController.atualizarCategoria);

// Rota para excluir uma categoria por ID
router.delete('/categorias/:id', categoriaController.excluirCategoria);

// Rota para obter produtos por categoria
router.get('/categorias/:id/produtos', categoriaController.obterProdutosPorCategoria);


module.exports = router;
