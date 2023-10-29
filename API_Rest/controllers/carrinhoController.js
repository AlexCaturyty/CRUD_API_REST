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

