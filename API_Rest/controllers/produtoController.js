const Produto = require('../models/produto'); // Importe a classe Produto
const { validationResult } = require('express-validator'); // Use a validação se necessário

// Controlador para listar todos os produtos
exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    console.log(error); // Exibe o erro no console
    res.status(500).json({ error: 'Erro ao listar os produtos' });
  }
};

// Controlador para obter um produto por ID
exports.obterProduto = async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await Produto.findById(id);
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter produto' });
  }
};

// Controlador para criar um novo produto
exports.criarProduto = async (req, res) => {
  const { nome, preco, descricao, estoque } = req.body;
  const novoProduto = new Produto(null, nome, preco, descricao, estoque); // Crie um novo objeto Produto
  try {
    const produtoCriado = await Produto.create(novoProduto);
    res.status(201).json(produtoCriado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

// Controlador para atualizar um produto por ID
exports.atualizarProduto = async (req, res) => {
  const { id } = req.params;
  const { nome, preco, descricao, estoque } = req.body;
  try {
    const produto = await Produto.findById(id);
    if (produto) {
      const produtoAtualizado = await Produto.update(id, {
        nome,
        preco,
        descricao,
        estoque,
      });
      res.json(produtoAtualizado);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

// Controlador para excluir um produto por ID
exports.excluirProduto = async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await Produto.findById(id);
    if (produto) {
      await Produto.delete(id);
      res.status(204).send(); // Sem conteúdo
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir produto' });
  }
};
