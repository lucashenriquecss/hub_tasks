export type jobType = {
    id?:number | string,
    name: string,
    status: string,
    schedule: string,
    path: string,
    dataValues?: any,
}


export type execType = {
    id?:number,
    pid: string,
    status: string,
    start_time?: any,
    finish_time?: any,
    description:string
}