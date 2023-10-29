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

  // Método para listar todas as avaliações
  static findAll() {
    return db.manyOrNone('SELECT * FROM avaliacoes');
  }

  // Método para obter uma avaliação por ID
  static findById(id) {
    return db.oneOrNone('SELECT * FROM avaliacoes WHERE id = $1', [id]);
  }

  // Método para atualizar uma avaliação
  static update(id, cliente_id, produto_id, pedido_id, avaliacao, classificacao) {
    return db.none('UPDATE avaliacoes SET cliente_id = $2, produto_id = $3, pedido_id = $4, avaliacao = $5, classificacao = $6 WHERE id = $1', [id, cliente_id, produto_id, pedido_id, avaliacao, classificacao]);
  }

  // Método para excluir uma avaliação por ID
  static delete(id) {
    return db.none('DELETE FROM avaliacoes WHERE id = $1', [id]);
  }

  // ...
}

module.exports = Avaliacao;
const express = require('express');
const router = express.Router();

module.exports = router;
