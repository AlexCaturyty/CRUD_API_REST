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

// Controlador para criar uma entrega
exports.criarEntrega = async (req, res) => {
  const { endereco_entrega, cidade, estado, cep } = req.body;
  try {
    const novaEntrega = await Entrega.criarEntrega(endereco_entrega, cidade, estado, cep);
    res.json(novaEntrega);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a entrega' });
  }
};

// Controlador para listar todas as entregas
exports.listarEntregas = async (req, res) => {
  try {
    const entregas = await Entrega.obterTodasEntregas();
    res.json(entregas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as entregas' });
  }
};

// Controlador para obter uma entrega por ID
exports.obterEntregaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const entrega = await Entrega.buscarEntregaPorId(id);
    if (entrega) {
      res.json(entrega);
    } else {
      res.status(404).json({ error: 'Entrega não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter a entrega' });
  }
};

// Controlador para atualizar uma entrega
exports.atualizarEntrega = async (req, res) => {
  const { id } = req.params;
  const { endereco_entrega, cidade, estado, cep } = req.body;
  try {
    const entrega = await Entrega.buscarEntregaPorId(id);
    if (entrega) {
      entrega.endereco_entrega = endereco_entrega;
      entrega.cidade = cidade;
      entrega.estado = estado;
      entrega.cep = cep;
      await entrega.atualizar();
      res.json({ message: 'Entrega atualizada com sucesso' });
    } else {
      res.status(404).json({ error: 'Entrega não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a entrega' });
  }
};

// Controlador para excluir uma entrega
exports.excluirEntrega = async (req, res) => {
  const { id } = req.params;
  try {
    const entrega = await Entrega.buscarEntregaPorId(id);
    if (entrega) {
      await entrega.excluir();
      res.json({ message: 'Entrega excluída com sucesso' });
    } else {
      res.status(404).json({ error: 'Entrega não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a entrega' });
  }
};


