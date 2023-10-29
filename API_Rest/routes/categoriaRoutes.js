const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Rota para criar uma nova categoria
router.post('/criar', categoriaController.criarCategoria);

// Rota para listar todas as categorias
router.get('/', categoriaController.listarCategorias);

// Rota para obter uma categoria por ID
router.get('/chave/:id', categoriaController.obterCategoria);

// Rota para atualizar uma categoria por ID
router.put('/update/chave/:id', categoriaController.atualizarCategoria);

// Rota para excluir uma categoria por ID
router.delete('/delete/chave/:id', categoriaController.excluirCategoria);

// Rota para obter produtos por categoria
router.get('/categorias/:id/produtos', categoriaController.obterProdutosPorCategoria);


module.exports = router;
