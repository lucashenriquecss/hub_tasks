import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';
import Job from './JobModel';

class Execution extends Model {
  public id!: number;
  public pid!: string;
  public status !:string;
  public description!: string;
  public start_time!: Date;
  public finish_time!: Date;
}

Execution.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    finish_time: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Executions',
  }
);
Execution.belongsTo(Job, {
    foreignKey: 'job_id', // Especificando a chave estrangeira na tabela de Executions
});

export default Execution;
