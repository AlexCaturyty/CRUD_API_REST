const Pedido = require('../models/pedido'); // Importe a classe Pedido
const { validationResult } = require('express-validator'); // Use a validação se necessário

// Controlador para listar todos os pedidos
exports.listarPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar pedidos' });
  }
};

// Controlador para obter um pedido por ID
exports.obterPedido = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findById(id);
    if (pedido) {
      res.json(pedido);
    } else {
      res.status(404).json({ error: 'Pedido não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter pedido' });
  }
};

// Controlador para criar um novo pedido
exports.criarPedido = async (req, res) => {
  const { data, total, cliente_id, entrega_id } = req.body;
  const novoPedido = new Pedido(null, data, total, cliente_id, entrega_id); // Crie um novo objeto Pedido
  try {
    const pedidoCriado = await Pedido.createPedidoComCliente(novoPedido);
    res.status(201).json(pedidoCriado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
};

// Controlador para atualizar um pedido por ID
exports.atualizarPedido = async (req, res) => {
  const { id } = req.params;
  const { data, total, cliente_id, entrega_id } = req.body;
  try {
    const pedido = await Pedido.findById(id);
    if (pedido) {
      const pedidoAtualizado = await Pedido.update(id, {
        data,
        total,
        cliente_id,
        entrega_id,
      });
      res.json(pedidoAtualizado);
    } else {
      res.status(404).json({ error: 'Pedido não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar pedido' });
  }
};

// Controlador para excluir um pedido por ID
exports.excluirPedido = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findById(id);
    if (pedido) {
      await Pedido.delete(id);
      res.status(204).send(); // Sem conteúdo
    } else {
      res.status(404).json({ error: 'Pedido não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir pedido' });
  }
};

// Controller para adicionar um produto ao pedido
exports.adicionarProdutoAoPedido = async (req, res) => {
  const { id } = req.params; // ID do pedido
  const { produto_id, quantidade } = req.body;

  try {
    await Pedido.adicionarProdutoAoPedido(id, produto_id, quantidade);
    res.status(201).json({ message: 'Produto adicionado ao pedido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar produto ao pedido' });
  }
};

// Controller para associar entrega a um pedido
exports.associarEntregaAoPedido = async (req, res) => {
  const { id } = req.params; // ID do pedido
  const { entrega_id } = req.body;

  try {
    await Pedido.associarEntregaAoPedido(id, entrega_id);
    res.status(200).json({ message: 'Entrega associada ao pedido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao associar entrega ao pedido' });
  }
};
