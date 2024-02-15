import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';

class Job extends Model {
  public id!: number;
  public name!: string;
  public status !:string;
  public schedule!: string;
  public path!: string;
  public last_time!: Date;
  public next_time!: Date;
}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['running', 'finished', 'error','stopped']], // Lista das palavras permitidas
          msg: 'O status do job deve ser error, running, stopped ou finished"', // Mensagem de erro personalizada
        },
      },
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    schedule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    next_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Jobs',
  }
);

export default Job;
