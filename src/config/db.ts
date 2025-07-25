import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const requiredEnv = ["DB_NAME", "DB_USER", "DB_PASS", "DB_HOST"];
for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(` Missing environment variable: ${key}`);
  }
}

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!) || 5432,
    dialect: "postgres",
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(" PostgreSQL connected");
  } catch (err) {
    console.error(" PostgreSQL connection failed:", err);
    process.exit(1);
  }
};
