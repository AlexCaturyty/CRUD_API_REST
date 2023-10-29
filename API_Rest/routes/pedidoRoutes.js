const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Rota para listar todos os pedidos
router.get('/', pedidoController.listarPedidos);

// Rota para obter um pedido por ID
router.get('/chave/:id', pedidoController.obterPedido);

// Rota para atualizar um pedido por ID
router.put('/chave/update/:id', pedidoController.atualizarPedido);

// Rota para excluir um pedido por ID
router.delete('/chave/delete/:id', pedidoController.excluirPedido);

// Rota para adicionar um produto ao pedido
router.post('/adicionar-produto/:id/produtos', pedidoController.adicionarProdutoAoPedido);

// Rota para associar entrega a um pedido
router.post('/adicionar-entrega/:id/entrega', pedidoController.associarEntregaAoPedido);


module.exports = router;
