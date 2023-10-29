// No arquivo pedido.js
const { initOptions, connectionString } = require('../db'); // Importe initOptions e connectionString

const pgp = require('pg-promise')(initOptions);
const db = pgp(connectionString);

class Pedido {
  constructor(id, data, total, cliente_id, entrega_id) {
    this.id = id;
    this.data = data;
    this.total = total;
    this.cliente_id = cliente_id;
    this.entrega_id = entrega_id;
  }

  // Métodos para realizar operações de CRUD

  static createPedidoComCliente(pedido) {
    return db.one('INSERT INTO pedidos (data, total, cliente_id) VALUES ($1, $2, $3) RETURNING *', [
      pedido.data,
      pedido.total,
      pedido.cliente_id,
    ]);
  }

  static findAll() {
    return db.manyOrNone('SELECT * FROM pedidos');
  }

  static findById(id) {
    return db.oneOrNone('SELECT * FROM pedidos WHERE id = $1', [id]);
  }

  static update(id, pedido) {
    return db.one(
      'UPDATE pedidos SET data=$1, total=$2, cliente_id=$3, entrega_id=$4 WHERE id=$5 RETURNING *',
      [pedido.data, pedido.total, pedido.cliente_id, pedido.entrega_id, id]
    );
  }

  static delete(id) {
    return db.none('DELETE FROM pedidos WHERE id=$1', [id]);
  }

  static adicionarProdutoAoPedido(idPedido, idProduto, quantidade) {
    return db.none('INSERT INTO pedido_produto (pedido_id, produto_id, quantidade) VALUES ($1, $2, $3)', [
      idPedido,
      idProduto,
      quantidade,
    ]);
  }

  static associarEntregaAoPedido(idPedido, idEntrega) {
    return db.none('UPDATE pedidos SET entrega_id = $1 WHERE id = $2', [idEntrega, idPedido]);
  }


}

module.exports = Pedido;
