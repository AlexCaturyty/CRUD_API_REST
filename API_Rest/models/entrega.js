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

    // Método para criar uma entrega
    static async criarEntrega(endereco_entrega, cidade, estado, cep) {
      const query = 'INSERT INTO entregas (endereco_entrega, cidade, estado, cep) VALUES ($1, $2, $3, $4) RETURNING id';
      const values = [endereco_entrega, cidade, estado, cep];
      const result = await db.one(query, values);
      return new Entrega(result.id, endereco_entrega, cidade, estado, cep);
    }

       // Método para encontrar todas as entregas
   static obterTodasEntregas() {
    return db.manyOrNone('SELECT * FROM entregas');
  }
  
    // Método para buscar uma entrega por ID
    static async buscarEntregaPorId(id) {
      const query = 'SELECT * FROM entregas WHERE id = $1';
      const result = await db.oneOrNone(query, id);
      if (result) {
        return new Entrega(result.id, result.endereco_entrega, result.cidade, result.estado, result.cep);
      }
      return null; // Retorna null se a entrega não for encontrada
    }
  
    // Método para atualizar uma entrega
    async atualizar() {
      const query = 'UPDATE entregas SET endereco_entrega = $1, cidade = $2, estado = $3, cep = $4 WHERE id = $5';
      const values = [this.endereco_entrega, this.cidade, this.estado, this.cep, this.id];
      await db.none(query, values);
    }
  
    // Método para excluir uma entrega
    async excluir() {
      const query = 'DELETE FROM entregas WHERE id = $1';
      await db.none(query, this.id);
    }
  
}

module.exports = Entrega;
