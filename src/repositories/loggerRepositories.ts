import Job from "../models/JobModel";
import Execution from "../models/execLoggerModel";
import Logger from "../models/loggerModel";

type loggerType  = {
    description: string,
    status : string,
    job_id: number,
    exec_id: number,
    data?: any,
    attach: string,
}
class LoggerRepository extends Logger {

     async addSuccess(
            description: string,
            job_id: number,
            exec_id: number,
            data: any,
            attach: string
        ){
            const body:loggerType = {
                description,
                status:'success',
                job_id,
                exec_id,
                data,
                attach
            } 
        await Logger.create(body);
    }

        async addError(
            description: string,
            job_id: number,
            exec_id: number,
            data: any,
            attach: string
        ){
            const body:loggerType = {
                description,
                status:'error',
                job_id,
                exec_id,
                data,
                attach
            } 
        await Logger.create(body);
    }
    async addInfo(
        description: string,
        job_id: number,
        exec_id: number,
        data: any,
        attach: string
    ){
        const body:loggerType = {
            description,
            status:'info',
            job_id,
            exec_id,
            data: data || {},
            attach
        } 
        await Logger.create(body);
    }
    async addCompleted(
        description: string,
        job_id: number,
        exec_id: number,
        data: any,
        attach: string
    ){
        try {
            const body:loggerType = {
                description,
                status:'finished',
                job_id,
                exec_id,
                data,
                attach
            } 
            await Logger.create(body);
            await Job.update({status:'finished'},{where:{id:job_id}});
            await Execution.update({status:'finished',finish_time:new Date()},{where:{id:exec_id}})
        } catch (error) {
            // next(error);
        }
    }
}


export default LoggerRepository