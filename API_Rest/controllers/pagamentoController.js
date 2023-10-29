const Pagamento = require('../models/pagamento'); // Importe a classe Pagamento

// Controlador para criar um pagamento
exports.criarPagamento = async (req, res) => {
  const { pedido_id, metodo_pagamento, valor } = req.body;
  const novoPagamento = new Pagamento(null, pedido_id, metodo_pagamento, valor); // Crie um novo objeto Pagamento
  try {
    const pagamentoCriado = await Pagamento.create(novoPagamento);
    res.status(201).json(pagamentoCriado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pagamento' });
  }
};


