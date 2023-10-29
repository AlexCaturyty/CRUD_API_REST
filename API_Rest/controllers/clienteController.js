const Cliente = require('../models/cliente'); // Importe a classe Cliente

// Controlador para obter os pedidos de um cliente
exports.obterPedidosDoCliente = async (req, res) => {
  const { idCliente } = req.params;
  try {
    const pedidosDoCliente = await Cliente.getPedidosDoCliente(idCliente);
    res.json(pedidosDoCliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter os pedidos do cliente' });
  }
};


