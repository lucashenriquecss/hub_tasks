import { Request, Response, NextFunction } from 'express';
import { cronJ } from '../jobs/cron';
import Job from '../models/JobModel';
import { jobType } from '../models/types';

export class JobController {
    async initJobs(req: Request, res: Response,next:NextFunction){
        try {
            const jobs:jobType[]= await Job.findAll();
            
            cronJ(jobs)
            res.send('init jobs')
          } catch (error) {
            next(error)
          }
    }

    async createJobs(req: Request, res: Response,next:NextFunction){
        try {
            const body : jobType = req.body;
            const jobs:jobType= await Job.create(body);
            
            res.json(jobs)
          } catch (error) {
            next(error)
          }
    }
  
}