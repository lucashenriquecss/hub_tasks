import cron, { schedule } from 'node-cron';
import fs from 'fs';
import path from 'path';


export function cronJ(jobs: any): void {
    for (let ik = 0; ik < jobs.length; ik++) {
        const element = jobs[ik];
        const filePath = path.join(__dirname, element.path);
        cron.schedule(element.schedule, () => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Erro ao ler o arquivo:', err);
                    return;
                }
            
                // Cria uma nova função a partir do conteúdo do arquivo
                const newFunction = new Function(data);
            
                // Executa a função criada
                newFunction();
            });
        });
    }
}