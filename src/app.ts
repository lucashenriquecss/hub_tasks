import express from 'express';

import sequelize from './db/sequelize';
import bodyParser from 'body-parser';
import routes from './routes/index';
import Logger from './models/loggerModel';

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use('/',routes);



app.listen(port, async () => {
  try {
    
    await sequelize.authenticate();
    // console.log(sequelize)
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincroniza os modelos com o banco de dados
    await sequelize.sync();

    console.log(`Example app listening on port ${port}`)
  } catch (error) {
    console.error(error)
  }
});



