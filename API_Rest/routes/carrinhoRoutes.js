const express = require('express');
const router = express.Router();
const carrinhoController = require('../controllers/carrinhoController');

// Rota para criar um novo item no carrinho
router.post('/criar', carrinhoController.adicionarProdutoAoCarrinho);

// Rota para listar todos os itens no carrinho
router.get('/listar', carrinhoController.listarItensNoCarrinho);

// Rota para obter um item no carrinho por ID
router.get('/chave/:id', carrinhoController.obterItemNoCarrinhoPorId);

// Rota para atualizar um item no carrinho
router.put('/editar/chave/:id', carrinhoController.atualizarItemNoCarrinho);

// Rota para excluir um item no carrinho
router.delete('/deletar/chave/:id', carrinhoController.excluirItemNoCarrinho);

module.exports = router;
