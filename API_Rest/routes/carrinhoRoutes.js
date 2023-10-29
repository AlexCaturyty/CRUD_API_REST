const express = require('express');
const router = express.Router();
const carrinhoController = require('../controllers/carrinhoController');

// Rota para adicionar um produto ao carrinho
router.post('/carrinho/adicionar-produto', carrinhoController.adicionarProdutoAoCarrinho);

// Outras rotas específicas de Carrinho, se necessário

module.exports = router;
