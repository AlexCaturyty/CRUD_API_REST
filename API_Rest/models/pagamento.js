const { initOptions, connectionString } = require('../db'); // Importe initOptions e connectionString

const pgp = require('pg-promise')(initOptions);
const db = pgp(connectionString);

class Pagamento {
  constructor(id, pedido_id, metodo_pagamento, valor) {
    this.id = id;
    this.pedido_id = pedido_id;
    this.metodo_pagamento = metodo_pagamento;
    this.valor = valor;
  }

  // Método para criar um pagamento
  static create(pagamento) {
    return db.one('INSERT INTO pagamentos (pedido_id, metodo_pagamento, valor) VALUES ($1, $2, $3) RETURNING *', [
      pagamento.pedido_id,
      pagamento.metodo_pagamento,
      pagamento.valor
    ]);
  }


}

module.exports = Pagamento;
