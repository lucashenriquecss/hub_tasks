import express, { Request, Response } from 'express';
import { cronJ } from './jobs/cron';
import Job from './models/JobModel';
import sequelize from './db/sequelize';
import bodyParser from 'body-parser';

const app = express()
const port = 3000
app.use(bodyParser.json());
app.get('/', async (req: Request, res: Response) => {
    try {
        const jobs:any= await Job.findAll();
         cronJ(jobs)
        res.send('init jobs')
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
      }
});

app.post('/create', async (req: Request, res: Response) => {
    try {
        const jobs:any= await Job.create(req.body);
        
        res.json(jobs)
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
      }
})

app.listen(port, async () => {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Sincroniza os modelos com o banco de dados
    await sequelize.sync();

  console.log(`Example app listening on port ${port}`)
})