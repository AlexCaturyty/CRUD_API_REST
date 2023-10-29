const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const { Pool } = require('pg');
const database = require('./db');
const produtoRoutes = require('./routes/produtoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');
const entregaRoutes = require('./routes/entregaRoutes');
const pagamentoRoutes = require('./routes/pagamentoRoutes');
const carrinhoRoutes = require('./routes/carrinhoRoutes');

const initOptions = {
};

const pgp = require('pg-promise')(initOptions);
const db = pgp(database.connectionString);

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use('/produto', produtoRoutes);
app.use('/pedido', pedidoRoutes);
app.use('/cliente', clienteRoutes);
app.use('/avaliacao', avaliacaoRoutes)
app.use('/entrega', entregaRoutes);
app.use('/pagamento', pagamentoRoutes);
app.use('/carrinho', carrinhoRoutes);

app.get('/', (req, res) => {
    res.json({ info: 'API com CRUD Node.js, Express e ElephantSQL (POSTGRES)' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
