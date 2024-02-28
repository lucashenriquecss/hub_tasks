const context2 = JSON.parse(process.argv[2]);

(async () => {
    try {
        // debugger;
         
        // Defina uma função assíncrona para usar await
        console.log(context2);
        for (let index = 0; index < 40; index++) {
            console.log(index)     
        }
         
    } catch (error) {
        console.error(error);
    }


})(); //variaveis em contextto global