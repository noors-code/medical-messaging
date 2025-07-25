import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

interface EditLogAttributes {
  id: number;
  messageId: number;
  editedById: number;
  oldContent?: string;
  newContent?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface EditLogCreationAttributes
  extends Optional<EditLogAttributes, "id" | "oldContent" | "newContent"> {}

export class EditLog
  extends Model<EditLogAttributes, EditLogCreationAttributes>
  implements EditLogAttributes
{
  public id!: number;
  public messageId!: number;
  public editedById!: number;
  public oldContent?: string;
  public newContent?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

EditLog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    messageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "messages",
        key: "id",
      },
    },
    editedById: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    oldContent: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    newContent: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "EditLog",
    tableName: "edit_logs",
    timestamps: true,
  }
);
