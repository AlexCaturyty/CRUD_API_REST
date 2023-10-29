const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para listar todos os produtos
router.get('/Listarprodutos', produtoController.listarProdutos);

// Rota para obter um produto por ID
router.get('/produtos/:id', produtoController.obterProduto);

// Rota para criar um novo produto
router.post('/CriarProdutos', produtoController.criarProduto);

// Rota para atualizar um produto por ID
router.put('/produtos/:id', produtoController.atualizarProduto);

// Rota para excluir um produto por ID
router.delete('/produtos/:id', produtoController.excluirProduto);


module.exports = router;
