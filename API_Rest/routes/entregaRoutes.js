const express = require('express');
const router = express.Router();
const entregaController = require('../controllers/entregaController');

// Rota para obter o pedido associado a uma entrega
router.get('/entregas/:id/pedido', entregaController.obterPedidoDaEntrega);


module.exports = router;
