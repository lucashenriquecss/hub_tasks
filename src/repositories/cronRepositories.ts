import Job from "../models/JobModel";
import Execution from "../models/execLoggerModel";
import Logger from "../models/loggerModel";
import { execType, jobType } from "../models/types";

// update e create, apenas para inicializacao de cron
class cronRepository  {

  async createExec(element:jobType){
    const res = await Execution.create({
        pid:process.pid,
        status:'running',
        start_time: new Date(),
        job_id: element.id
    });
    return res
  }
  async UpExec(element:jobType,exec:execType[]){
    const res = await Execution.update({
        pid:process.pid,
        status:'error',
        finish_time: new Date(),
        job_id: element.id,
        description:'PID locked'
     },{where:{id: exec[0].id}});
     return res
  }
  async UpJob(element:jobType,status:string){
    const res = await Job.update({
        status,
    },{where:{id: element.id}});
    return res
  }
  async findjob(element:jobType){
    const res = await Job.findAll({where:{id: element.id}});
    return res
  }


}


export default cronRepository