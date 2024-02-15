// importMiddleware.ts
import { Request, Response, NextFunction } from 'express';

import Job from '../models/JobModel';
const importMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    console.log('Middleware de importação executado');
    
    // Pode fazer validações, modificações, etc.

    // Passa para o próximo middleware ou rota
    next();
};

export default importMiddleware;
