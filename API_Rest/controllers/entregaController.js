const Entrega = require('../models/entrega'); // Importe a classe Entrega

// Controlador para obter o pedido associado a uma entrega
exports.obterPedidoDaEntrega = async (req, res) => {
  const { idEntrega } = req.params;
  try {
    const pedidoId = await Entrega.getPedidoDaEntrega(idEntrega);
    if (pedidoId) {
      // O pedido associado à entrega foi encontrado
      res.json({ pedido_id: pedidoId });
    } else {
      res.status(404).json({ error: 'Entrega não encontrada ou não está associada a nenhum pedido' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o pedido associado à entrega' });
  }
};


