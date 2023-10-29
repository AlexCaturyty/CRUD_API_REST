const Categoria = require('../models/categoria'); // Importe a classe Categoria

// Controlador para criar uma nova categoria
exports.criarCategoria = async (req, res) => {
  const { nome } = req.body;
  const novaCategoria = new Categoria(null, nome); // Crie um novo objeto Categoria
  try {
    const categoriaCriada = await Categoria.create(novaCategoria);
    res.status(201).json(categoriaCriada);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar categoria' });
  }
};

// Controlador para listar todas as categorias
exports.listarCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar categorias' });
  }
};

// Controlador para obter uma categoria por ID
exports.obterCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findById(id);
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ error: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter categoria' });
  }
};

// Controlador para atualizar uma categoria por ID
exports.atualizarCategoria = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  try {
    const categoria = await Categoria.findById(id);
    if (categoria) {
      const categoriaAtualizada = await Categoria.update(id, { nome });
      res.json(categoriaAtualizada);
    } else {
      res.status(404).json({ error: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar categoria' });
  }
};

// Controlador para excluir uma categoria por ID
exports.excluirCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findById(id);
    if (categoria) {
      await Categoria.delete(id);
      res.status(204).send(); // Sem conteúdo
    } else {
      res.status(404).json({ error: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir categoria' });
  }
};

// Controlador para obter produtos por categoria
exports.obterProdutosPorCategoria = async (req, res) => {
  const { idCategoria } = req.params;
  try {
    const produtos = await Categoria.getProdutosPorCategoria(idCategoria);
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter produtos por categoria' });
  }
};

