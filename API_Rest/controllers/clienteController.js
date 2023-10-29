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

// Controller para listar todos os clientes
exports.listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os clientes' });
  }
};

// Controller para listar um cliente por ID
exports.listarClientePorId = async (req, res) => {
  const { id } = req.params;

  try {
    const cliente = await Cliente.findById(id);

    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar o cliente' });
  }
};

// Controller para criar um novo cliente
exports.criarCliente = async (req, res) => {
  const { nome, email } = req.body;

  try {
    const novoCliente = await Cliente.create(nome, email);
    res.json(novoCliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar um novo cliente' });
  }
};

// Controller para atualizar um cliente
exports.atualizarCliente = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  try {
    await Cliente.update(id, nome, email);
    res.json({ message: 'Cliente atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o cliente' });
  }
};

// Controller para excluir um cliente
exports.excluirCliente = async (req, res) => {
  const { id } = req.params;

  try {
    await Cliente.delete(id);
    res.json({ message: 'Cliente excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o cliente' });
  }
};
