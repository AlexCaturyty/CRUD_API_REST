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

// Controller para listar todas as avaliações
exports.listarAvaliacoes = async (req, res) => {
  try {
    const avaliacoes = await Avaliacao.findAll();
    res.json(avaliacoes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as avaliações' });
  }
};

// Controller para obter uma avaliação por ID
exports.obterAvaliacaoPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const avaliacao = await Avaliacao.findById(id);

    if (avaliacao) {
      res.json(avaliacao);
    } else {
      res.status(404).json({ error: 'Avaliação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter a avaliação por ID' });
  }
};

// Controller para atualizar uma avaliação por ID
exports.atualizarAvaliacao = async (req, res) => {
  const { id } = req.params;
  const { cliente_id, produto_id, pedido_id, avaliacao, classificacao } = req.body;

  try {
    await Avaliacao.update(id, cliente_id, produto_id, pedido_id, avaliacao, classificacao);
    res.json({ message: 'Avaliação atualizada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a avaliação' });
  }
};

// Controller para excluir uma avaliação por ID
exports.excluirAvaliacao = async (req, res) => {
  const { id } = req.params;

  try {
    await Avaliacao.delete(id);
    res.json({ message: 'Avaliação excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a avaliação' });
  }
};


