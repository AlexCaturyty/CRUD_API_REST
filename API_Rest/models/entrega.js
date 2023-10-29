// No arquivo entrega.js
const { initOptions, connectionString } = require('../db'); // Importe initOptions e connectionString

const pgp = require('pg-promise')(initOptions);
const db = pgp(connectionString);

class Entrega {
  constructor(id, endereco_entrega, cidade, estado, cep) {
    this.id = id;
    this.endereco_entrega = endereco_entrega;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }

  // Método para obter o pedido associado a uma entrega
  static getPedidoDaEntrega(idEntrega) {
    return db.oneOrNone('SELECT pedido_id FROM pedidos WHERE entrega_id = $1', [idEntrega]);
  }

  
}

module.exports = Entrega;
