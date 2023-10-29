const { initOptions, connectionString } = require('../db'); // Importe initOptions e connectionString

const pgp = require('pg-promise')(initOptions);
const db = pgp(connectionString);

class Carrinho {
  constructor(id, cliente_id, produto_id, quantidade) {
    this.id = id;
    this.cliente_id = cliente_id;
    this.produto_id = produto_id;
    this.quantidade = quantidade;
  }

  // Método para adicionar um produto ao carrinho
  static adicionarProdutoAoCarrinho(cliente_id, produto_id, quantidade) {
    return db.none('INSERT INTO carrinho (cliente_id, produto_id, quantidade) VALUES ($1, $2, $3)', [
      cliente_id,
      produto_id,
      quantidade
    ]);
  }

  static findAll() {
    return db.manyOrNone('SELECT * FROM carrinho');
  }

  static findById(id) {
    return db.oneOrNone('SELECT * FROM carrinho WHERE id = $1', [id]);
  }

  static update(id, carrinho) {
    return db.one(
      'UPDATE carrinho SET cliente_id=$1, produto_id=$2, quantidade=$3 WHERE id=$4 RETURNING *',
      [carrinho.cliente_id, carrinho.produto_id, carrinho.quantidade, id]
    );
  }

  static delete(id) {
    return db.none('DELETE FROM carrinho WHERE id=$1', [id]);
  }

  // Outros métodos específicos de Carrinho, se necessário

  // ...
}

module.exports = Carrinho;
