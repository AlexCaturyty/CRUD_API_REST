// No arquivo cliente.js
const { initOptions, connectionString } = require('../db'); // Importe initOptions e connectionString

const pgp = require('pg-promise')(initOptions);
const db = pgp(connectionString);

class Cliente {
  constructor(id, nome, email) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }

  // Método para obter os pedidos de um cliente
  static getPedidosDoCliente(idCliente) {
    return db.manyOrNone('SELECT id, data, total FROM pedidos WHERE cliente_id = $1', [idCliente]);
  }


}

module.exports = Cliente;
