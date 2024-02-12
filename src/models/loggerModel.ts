import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';
console.log(sequelize)

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
    },
    job: {
        type: DataTypes.STRING,
        allowNull: false,
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
// console.log(sequelize)
export default Logger;
