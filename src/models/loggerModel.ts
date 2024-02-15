import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';
import Execution from './execLoggerModel';
import Job from './JobModel';

class Logger extends Model {
  public id!: number;
  public description!: string;
  public status !: string;
  public job!: string;
  public data!: JSON;
  public attach!: string;
}

Logger.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['error', 'info', 'success','finished']], // Lista das palavras permitidas
          msg: 'O status do log deve ser error, info, success ou finished"', // Mensagem de erro personalizada
        },
      },
    },
    data: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    attach: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Loggers',
  }
);

Logger.belongsTo(Execution, { foreignKey: 'exec_id' });
Logger.belongsTo(Job, { foreignKey: 'job_id' });

export default Logger;
