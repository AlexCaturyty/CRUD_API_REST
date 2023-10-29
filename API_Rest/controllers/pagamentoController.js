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

// Controlador para listar todos os pagamentos
exports.listarPagamentos = async (req, res) => {
  try {
    const pagamentos = await Pagamento.obterTodosPagamentos();
    res.json(pagamentos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os pagamentos' });
  }
};

// Controlador para obter um pagamento por ID
exports.obterPagamentoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const pagamento = await Pagamento.buscarPagamentoPorId(id);
    if (pagamento) {
      res.json(pagamento);
    } else {
      res.status(404).json({ error: 'Pagamento não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o pagamento' });
  }
};

// Controlador para atualizar um pagamento
exports.atualizarPagamento = async (req, res) => {
  const { id } = req.params;
  const { pedido_id, metodo_pagamento, valor } = req.body;
  try {
    const pagamento = await Pagamento.buscarPagamentoPorId(id);
    if (pagamento) {
      pagamento.pedido_id = pedido_id;
      pagamento.metodo_pagamento = metodo_pagamento;
      pagamento.valor = valor;
      await pagamento.atualizar();
      res.json({ message: 'Pagamento atualizado com sucesso' });
    } else {
      res.status(404).json({ error: 'Pagamento não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o pagamento' });
  }
};

// Controlador para excluir um pagamento
exports.excluirPagamento = async (req, res) => {
  const { id } = req.params;
  try {
    const pagamento = await Pagamento.buscarPagamentoPorId(id);
    if (pagamento) {
      await pagamento.excluir();
      res.json({ message: 'Pagamento excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Pagamento não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o pagamento' });
  }
  };


