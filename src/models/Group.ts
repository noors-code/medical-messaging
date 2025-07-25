import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

interface GroupAttributes {
  id: number;
  name: string;
  archived?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface GroupCreationAttributes
  extends Optional<GroupAttributes, "id" | "archived"> {}

export class Group
  extends Model<GroupAttributes, GroupCreationAttributes>
  implements GroupAttributes
{
  public id!: number;
  public name!: string;
  public archived!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Group.init(
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
    archived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Group",
    tableName: "groups",
    timestamps: true,
  }
);
