const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para obter os pedidos de um cliente
router.get('/clientes/:id/pedido', clienteController.obterPedidosDoCliente);


module.exports = router;
