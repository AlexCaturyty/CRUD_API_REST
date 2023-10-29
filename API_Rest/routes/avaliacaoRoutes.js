const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController'); // Certifique-se de que o caminho do controller está correto

// Rota para criar uma nova avaliação
router.post('/', avaliacaoController.criarAvaliacao);

// Rota para listar todas as avaliações
router.get('/', avaliacaoController.listarAvaliacoes);

// Rota para obter uma avaliação por ID
router.get('/chave/:id', avaliacaoController.obterAvaliacaoPorId);

// Rota para atualizar uma avaliação por ID
router.put('/update/chave/:id', avaliacaoController.atualizarAvaliacao);

// Rota para excluir uma avaliação por ID
router.delete('/delete/chave/:id', avaliacaoController.excluirAvaliacao);

module.exports = router;
