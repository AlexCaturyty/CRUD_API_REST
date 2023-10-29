const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para listar todos os produtos
router.get('/listar', produtoController.listarProdutos);

// Rota para obter um produto por ID
router.get('/chave/:id', produtoController.obterProduto);

// Rota para criar um novo produto
router.post('/criar', produtoController.criarProduto);

// Rota para atualizar um produto por ID
router.put('/editar/chave/:id', produtoController.atualizarProduto);

// Rota para excluir um produto por ID
router.delete('/deletar/chave/:id', produtoController.excluirProduto);


module.exports = router;
