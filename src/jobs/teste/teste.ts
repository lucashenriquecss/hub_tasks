const context = JSON.parse(process.argv[2]);
(async () => {
    try {
        // debugger;
        
        // Defina uma função assíncrona para usar await
        console.log(context);

        for (let index = 0; index < 30; index++) {
            console.log(index)     
        }

     

    } catch (error) {
        console.error(error);
    }


})(); //variaveis em contextto global