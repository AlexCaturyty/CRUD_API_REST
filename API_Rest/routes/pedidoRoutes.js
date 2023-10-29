const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Rota para listar todos os pedidos
router.get('/pedidos', pedidoController.listarPedidos);

// Rota para obter um pedido por ID
router.get('/pedidos/:id', pedidoController.obterPedido);

// Rota para atualizar um pedido por ID
router.put('/pedidos/:id', pedidoController.atualizarPedido);

// Rota para excluir um pedido por ID
router.delete('/pedidos/:id', pedidoController.excluirPedido);

// Rota para adicionar um produto ao pedido
router.post('/pedidos/:id/produtos', pedidoController.adicionarProdutoAoPedido);

// Rota para associar entrega a um pedido
router.post('/pedidos/:id/entrega', pedidoController.associarEntregaAoPedido);


module.exports = router;
