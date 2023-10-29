const express = require('express');
const router = express.Router();
const entregaController = require('../controllers/entregaController');

// Rota para obter o pedido associado a uma entrega
router.get('/:id/pedido', entregaController.obterPedidoDaEntrega);

// Rota para criar uma nova entrega
router.post('/criar', entregaController.criarEntrega);

// Rota para listar todas as entregas
router.get('/listar', entregaController.listarEntregas);

// Rota para obter uma entrega por ID
router.get('/chave/:id', entregaController.obterEntregaPorId);

// Rota para atualizar uma entrega
router.put('/editar/chave/:id', entregaController.atualizarEntrega);

// Rota para excluir uma entrega
router.delete('/deletar/chave/:id', entregaController.excluirEntrega);

module.exports = router;
