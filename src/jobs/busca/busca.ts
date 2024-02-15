(async (log,job_id,exec_id) => {
    try {
        // debugger;
        
        // Defina uma função assíncrona para usar await
        console.log('inicando busca 20s');
        for (let index = 0; index < 40; index++) {
            console.log(index)     
        }
        await log.addInfo('teste', job_id, exec_id, {
            teste: "dsdsd"
        }, "");
        
    
        // Chame a função assíncrona
        await log.addCompleted('completo', job_id, exec_id, {
            teste: "dsdsd"
        }, "");
        console.log('terminando busca 20s');    
    } catch (error) {
        console.error(error);
    }


})(log ,job_id,exec_id); //variaveis em contextto global