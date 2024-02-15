// async de tabelas para sqlite;
// TODO: MUDAR DEPOIS!
import Job from '../models/JobModel';
import Execution from '../models/execLoggerModel';
import Logger from '../models/loggerModel'; 


export const databeMiddleware = async () =>{
    await Logger.findAll();
    await Job.findAll();
    await Execution.findAll();
}



