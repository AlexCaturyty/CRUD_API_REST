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

app.use('/produtos', produtoRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/avaliacoes', avaliacaoRoutes)

app.get('/', (req, res) => {
    res.json({ info: 'API com CRUD Node.js, Express e ElephantSQL (POSTGRES)' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
