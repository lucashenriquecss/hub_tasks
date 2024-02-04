import express, { Request, Response } from 'express';

import sequelize from './db/sequelize';
import bodyParser from 'body-parser';
import routes from './routes/index';

const app = express()
const port = 3000
app.use(bodyParser.json());

app.use('/', routes);
app.listen(port, async () => {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincroniza os modelos com o banco de dados
    await sequelize.sync();

  console.log(`Example app listening on port ${port}`)
})