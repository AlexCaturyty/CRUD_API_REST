const Avaliacao = require('../models/avaliacao'); // Importe a classe Avaliacao

// Controlador para criar uma avaliação
exports.criarAvaliacao = async (req, res) => {
  const { cliente_id, produto_id, pedido_id, avaliacao, classificacao } = req.body;
  const novaAvaliacao = new Avaliacao(null, cliente_id, produto_id, pedido_id, avaliacao, classificacao); // Crie um novo objeto Avaliacao
  try {
    const avaliacaoCriada = await Avaliacao.create(novaAvaliacao);
    res.status(201).json(avaliacaoCriada);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar avaliação' });
  }
};


