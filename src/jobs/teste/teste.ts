(async (log,job_id,exec_id) => {
    try {
        // debugger;
        
        // Defina uma função assíncrona para usar await
        console.log('inicando teste 10s');

        for (let index = 0; index < 30; index++) {
            console.log(index)     
        }

            await log.addInfo('teste10', job_id, exec_id, {
                teste: "dsdsd"
            }, "");
            console.log('teste 10');
        
    
        // Chame a função assíncrona
        await log.addCompleted('completo', job_id, exec_id, {
            teste: "dsdsd"
        }, "");
        console.log('terminando 10');

    } catch (error) {
        console.error(error);
    }


})(log ,job_id,exec_id); //variaveis em contextto global