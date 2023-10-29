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

  // Outros métodos específicos de Carrinho, se necessário

  // ...
}

module.exports = Carrinho;
