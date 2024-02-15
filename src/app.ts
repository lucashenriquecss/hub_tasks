import express from 'express';

import sequelize from './db/sequelize';
import bodyParser from 'body-parser';
import routes from './routes/index';
import { databeMiddleware } from './middlewares/databaseMiddleware';
import { errorHandlerSequelize,globalErrorHandler } from './middlewares/errosHandlers';
import importMiddleware from './middlewares/imports';
import { JobController } from './controllers/JobControllers';

const  job = new JobController()
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use('/',routes);

app.use(errorHandlerSequelize);
app.use(globalErrorHandler);
app.use(databeMiddleware);

app.listen(port, async () => {
  try {
    
    await sequelize.authenticate(); 
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincroniza os modelos com o banco de dados
    await sequelize.sync();
    console.log(`Example app listening on port ${port}`)
  } catch (error) {
    console.error(error)
  }
});



