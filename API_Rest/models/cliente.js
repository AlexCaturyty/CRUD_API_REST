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

   // Método para encontrar todos os clientes
   static findAll() {
    return db.manyOrNone('SELECT * FROM clientes');
  }

  // Método para encontrar um cliente por ID
  static findById(id) {
    return db.oneOrNone('SELECT * FROM clientes WHERE id = $1', [id]);
  }

  // Método para criar um novo cliente
  static create(nome, email) {
    return db.one('INSERT INTO clientes (nome, email) VALUES ($1, $2) RETURNING id', [nome, email]);
  }

  // Método para atualizar um cliente
  static update(id, nome, email) {
    return db.none('UPDATE clientes SET nome = $1, email = $2 WHERE id = $3', [nome, email, id]);
  }

  // Método para excluir um cliente por ID
  static delete(id) {
    return db.none('DELETE FROM clientes WHERE id = $1', [id]);
  }

}

module.exports = Cliente;
