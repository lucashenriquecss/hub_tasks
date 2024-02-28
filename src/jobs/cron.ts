import cron, { schedule } from 'node-cron';
import fs from 'fs';
import { fork } from 'child_process'
import path from 'path';
import { execType, jobType } from '../models/types';
import Execution from '../models/execLoggerModel';
import cronRepository from '../repositories/cronRepositories';
const cronRep  = new cronRepository();


export async function cronJ(jobs: jobType[]) {
    for (let ik = 0; ik < jobs.length; ik++) {
        let element = jobs[ik];
        element = element.dataValues;
        try {
            const exec:any =  await execSearch(element)//TODO:VERIFICAR tipagem do PROCESSO DEPOIS
            const isActive: any = pidIsRunning(process.pid); //TODO:VERIFICAR PROCESSO DEPOIS
            if (isActive) {              
                const filePath = path.join(__dirname, element.path);
                cron.schedule(element.schedule, async() => {
                        const job = await cronRep.findjob(element);
                        if (job[0].dataValues.status === 'finished') {
                            const exec_id = await cronRep.createExec(element);
                            const up = await cronRep.UpJob(element,'running');
                            const filename = "src\\jobs\\" + element.path
                            // await fs.promises.access(filename)

                            const forked = fork(filename,
                                    [
                                        JSON.stringify({
                                            exec_id : exec_id.id,
                                            job_id : element.id
                                        })
                                    ],
                                    {
                                        detached:false,
                                    }
                                )
                            forked.on("message", async (message) => {
                                console.log(message);
                            });
                        }else{
                            console.log('runniiinggg')
                        }
                });
                 
            }else{
                const exec_id = await cronRep.UpExec(element,exec);
                const up = await cronRep.UpJob(element,'finished');
            }
        } catch (error) {
            const up = await cronRep.UpJob(element,'finished');
            console.error('');
        }
    }
}

 const execSearch = async(element:jobType): Promise<execType | null> =>{
    const execs : execType[] = await Execution.findAll({where:{job_id: element.id}, order: [['id', 'DESC']]});
    return execs[0];
}
async function pidIsRunning(pid:number) {
    try {
        process.kill(pid, 0);
        return true;
    } catch (e) {
        return false;
    }
}