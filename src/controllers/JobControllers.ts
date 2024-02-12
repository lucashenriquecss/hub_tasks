import { Request, Response, NextFunction } from 'express';
import { cronJ } from '../jobs/cron';
import Job from '../models/JobModel';
import Logger from '../models/loggerModel'; 
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
            const jobs:jobType= await Job.create(req.body);
            
            res.json(jobs)
          } catch (error) {
            next(error)
          }
    }
    async createLogger(req: Request, res: Response,next:NextFunction){
      try {
          const log:any= await Logger.create(req.body);
          
          res.json(log)
        } catch (error) {
          next(error)
        }
  }
}