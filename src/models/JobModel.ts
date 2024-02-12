import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';

class Job extends Model {
  public id!: number;
  public name!: string;
  public schedule!: string;
  public path!: string;
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
    schedule: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Jobs',
  }
);

export default Job;
