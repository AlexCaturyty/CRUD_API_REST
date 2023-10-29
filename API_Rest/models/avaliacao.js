const { initOptions, connectionString } = require('../db'); // Importe initOptions e connectionString

const pgp = require('pg-promise')(initOptions);
const db = pgp(connectionString);

class Avaliacao {
  constructor(id, cliente_id, produto_id, pedido_id, avaliacao, classificacao) {
    this.id = id;
    this.cliente_id = cliente_id;
    this.produto_id = produto_id;
    this.pedido_id = pedido_id;
    this.avaliacao = avaliacao;
    this.classificacao = classificacao;
  }

  // Método para criar uma avaliação
  static create(avaliacao) {
    return db.one('INSERT INTO avaliacoes (cliente_id, produto_id, pedido_id, avaliacao, classificacao) VALUES ($1, $2, $3, $4, $5) RETURNING *', [
      avaliacao.cliente_id,
      avaliacao.produto_id,
      avaliacao.pedido_id,
      avaliacao.avaliacao,
      avaliacao.classificacao
    ]);
  }

  // Outros métodos específicos de Avaliacao, se necessário

  // ...
}

module.exports = Avaliacao;
const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

// Rota para criar uma avaliação
router.post('/avaliacoes', avaliacaoController.criarAvaliacao);

// Outras rotas específicas de Avaliacao, se necessário

module.exports = router;
