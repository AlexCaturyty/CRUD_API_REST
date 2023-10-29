const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota para listar todos os clientes
router.get('/listar', clienteController.listarClientes);

// Rota para listar um cliente por ID
router.get('/chave/:id', clienteController.listarClientePorId);

// Rota para criar um novo cliente
router.post('/criar', clienteController.criarCliente);

// Rota para atualizar um cliente por ID
router.put('/editar/chave/:id', clienteController.atualizarCliente);

// Rota para excluir um cliente por ID
router.delete('/deletar/chave/:id', clienteController.excluirCliente);

// Rota para obter os pedidos de um cliente
router.get('/clientes/:id/pedido', clienteController.obterPedidosDoCliente);


module.exports = router;
