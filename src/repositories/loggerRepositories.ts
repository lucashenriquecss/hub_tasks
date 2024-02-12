import Logger from "../models/loggerModel";

type loggerType  = {
    description: string,
    status : string,
    job: string,
    data?: JSON,
    attach: string,
}
class LoggerRepository extends Logger {

     async addSuccess(
            description: string,
            job: string,
            data: JSON,
            attach: string
        ){
            const body:loggerType = {
                description,
                status:'success',
                job,
                data,
                attach
            } 
        await Logger.create(body);
    }

        async addError(
            description: string,
            job: string,
            data: JSON,
            attach: string
        ){
            const body:loggerType = {
                description,
                status:'error',
                job,
                data,
                attach
            } 
        await Logger.create(body);
    }
    async addInfo(
        description: string,
        job: string,
        data: JSON,
        attach: string
    ){
        const body:loggerType = {
            description,
            status:'info',
            job,
            data: data || {},
            attach
        } 
    await Logger.create(body);
    }
    async addCompleted(
        description: string,
        job: string,
        data: JSON,
        attach: string
    ){
        const body:loggerType = {
            description,
            status:'completed',
            job,
            data,
            attach
        } 
        await Logger.create(body);
        }
}


export default LoggerRepository