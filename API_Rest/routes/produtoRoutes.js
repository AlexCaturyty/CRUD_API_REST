const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// Rota para listar todos os produtos
router.get('/', produtoController.listarProdutos);

// Rota para obter um produto por ID
router.get('/chave/:id', produtoController.obterProduto);

// Rota para criar um novo produto
router.post('/criar-produto', produtoController.criarProduto);

// Rota para atualizar um produto por ID
router.put('/chave/update/:id', produtoController.atualizarProduto);

// Rota para excluir um produto por ID
router.delete('/chave/delete/:id', produtoController.excluirProduto);


module.exports = router;
