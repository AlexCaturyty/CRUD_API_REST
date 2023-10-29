const Carrinho = require('../models/carrinho'); // Importe a classe Carrinho

// Controlador para adicionar um produto ao carrinho
exports.adicionarProdutoAoCarrinho = async (req, res) => {
  const { cliente_id, produto_id, quantidade } = req.body;
  try {
    await Carrinho.adicionarProdutoAoCarrinho(cliente_id, produto_id, quantidade);
    res.status(201).json({ message: 'Produto adicionado ao carrinho com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar produto ao carrinho' });
  }
};

// Controlador para listar todos os itens no carrinho
exports.listarItensNoCarrinho = async (req, res) => {
  try {
    const itensNoCarrinho = await Carrinho.findAll();
    res.json(itensNoCarrinho);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os itens no carrinho' });
  }
};

// Controlador para obter um item no carrinho por ID
exports.obterItemNoCarrinhoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const itemNoCarrinho = await Carrinho.findById(id);
    if (itemNoCarrinho) {
      res.json(itemNoCarrinho);
    } else {
      res.status(404).json({ error: 'Item no carrinho não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o item no carrinho' });
  }
};

// Controlador para atualizar um item no carrinho
exports.atualizarItemNoCarrinho = async (req, res) => {
  const { id } = req.params;
  const { cliente_id, produto_id, quantidade } = req.body;
  try {
    const itemNoCarrinho = await Carrinho.findById(id);
    if (itemNoCarrinho) {
      itemNoCarrinho.cliente_id = cliente_id;
      itemNoCarrinho.produto_id = produto_id;
      itemNoCarrinho.quantidade = quantidade;
      await itemNoCarrinho.update(id, itemNoCarrinho);
      res.json({ message: 'Item no carrinho atualizado com sucesso' });
    } else {
      res.status(404).json({ error: 'Item no carrinho não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o item no carrinho' });
  }
};

// Controlador para excluir um item no carrinho
exports.excluirItemNoCarrinho = async (req, res) => {
  const { id } = req.params;
  try {
    const itemNoCarrinho = await Carrinho.findById(id);
    if (itemNoCarrinho) {
      await itemNoCarrinho.delete(id);
      res.json({ message: 'Item no carrinho excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Item no carrinho não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o item no carrinho' });
  }
};

