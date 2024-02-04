import { Request, Response } from 'express';
import { cronJ } from '../jobs/cron';
import Job from '../models/JobModel';
import { jobType } from '../models/types';

export class JobController {
    async initJobs(req: Request, res: Response){
        try {
            const jobs:jobType[]= await Job.findAll();
            cronJ(jobs)
            res.send('init jobs')
          } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            res.status(500).json({ error: 'Erro ao buscar usuários' });
          }
    }

    async createJobs(req: Request, res: Response){
        try {
            const jobs:jobType= await Job.create(req.body);
            
            res.json(jobs)
          } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            res.status(500).json({ error: 'Erro ao buscar usuários' });
          }
    }
}