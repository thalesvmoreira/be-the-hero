const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Rotas / Recursos
*/

 /** 
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query params: Parâmetros nomeados enviados na rota após '?' (Filtros, Paginação)
  * Route params: Parâmetros utilizados para identificar recursos.
  * Request body: Corpo da requisição, utilizado para criar ou alterar recursos.
  */

/**
 * SQL: MySQL, SQLite, PostegreSQL, Oracle, Microsoft SQL Server.
 * NOSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: SELECT * FROM users;
 * Query builder: table('users').select('*').where()
 */

module.exports = app;