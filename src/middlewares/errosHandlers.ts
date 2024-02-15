import { DatabaseError, Error, UniqueConstraintError, ValidationError } from "sequelize"
import { Request, Response,NextFunction } from 'express';

interface StatusError extends Error{
    status?: number;
  
}



export function errorHandlerSequelize(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof UniqueConstraintError) {
        return res.status(400).json({
            status:400,
            message: err.message,
            description: 'Registro duplicado no banco de dados.',
            stack: err.stack,
        });
    }
    
    if (err instanceof ValidationError) {
        return res.status(400).json({ 
            status:400,
            message: err.message,
            description: 'Erro de validação dos dados.',
            stack: err.stack,
       
        });
    }

    if (err instanceof DatabaseError) {
        return res.status(500).json({ 
            status:400,
            message: err.message,
            description: 'Erro interno do banco de dados.',
            stack: err.stack,
        });
    }

    // Caso contrário, trata como um erro interno do servidor
    console.error('Erro interno do servidor:', err);
    return res.status(500).json({ 
        status:400,
        message: err.message,
        description: 'Erro interno do servidor.',
        stack: err.stack,
    });
}


// export const notFoundHandler = (req:Request,res:Response,next:NextFunction) =>{
//     const error = new Error(`${req.method} ${req.originalUrl} not found`) as StatusError;
//     error['status'] = 404;
//     next(error);

// }   

export const globalErrorHandler = (error:StatusError,req:Request,res:Response, next:NextFunction) => {
    console.log(error.message);
    res.status(error['status'] || 500).json({
      status: error.status,
      message: error.message,
      description: error.name,
      stack: error.stack,
    })
  }