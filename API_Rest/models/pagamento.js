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

  static async obterTodosPagamentos() {
    const query = 'SELECT * FROM pagamentos';
    const results = await db.any(query);
    return results.map(result => new Pagamento(result.id, result.pedido_id, result.metodo_pagamento, result.valor));
  }

   // Método para buscar um pagamento por ID
   static async buscarPagamentoPorId(id) {
    const query = 'SELECT * FROM pagamentos WHERE id = $1';
    const result = await db.oneOrNone(query, id);
    if (result) {
      return new Pagamento(result.id, result.pedido_id, result.metodo_pagamento, result.valor);
    }
    return null; // Retorna null se o pagamento não for encontrado
  }

  // Método para atualizar um pagamento
  async atualizar() {
    const query = 'UPDATE pagamentos SET pedido_id = $1, metodo_pagamento = $2, valor = $3 WHERE id = $4';
    const values = [this.pedido_id, this.metodo_pagamento, this.valor, this.id];
    await db.none(query, values);
  }

  // Método para excluir um pagamento
  async excluir() {
    const query = 'DELETE FROM pagamentos WHERE id = $1';
    await db.none(query, this.id);
  }

  // Método para obter todos os pagamentos
  static async obterTodosPagamentos() {
    const query = 'SELECT * FROM pagamentos';
    const results = await db.any(query);
    return results.map(result => new Pagamento(result.id, result.pedido_id, result.metodo_pagamento, result.valor));
  }
}


module.exports = Pagamento;
