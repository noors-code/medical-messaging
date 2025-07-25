import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB, sequelize } from "./config/db";
import userRoutes from "./routes/userRoutes";
import editLogRoutes from "./routes/editLog.routes";
import messageRoutes from "./routes/message.routes";
import groupRoutes from "./routes/group.routes";
import { setupSwaggerDocs } from "./config/swagger";
import { errorHandler } from "./middlewares/errorMiddleware";

import "./models/User.model";
import "./models/Group";
import "./models/Message";
import "./models/Editlog";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

setupSwaggerDocs(app);

app.use("/api/user", userRoutes);
app.use("/api/editlog", editLogRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/group", groupRoutes);

app.get("/", (req, res) => {
  res.send(" Secure Messaging API Running!");
});

app.use(errorHandler);


const startServer = async () => {
  try {
    console.log(" Starting server...");

    await connectDB(); 
    console.log(" Database connected");

    await sequelize.sync({ alter: true }); 
    console.log(" Models synced");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(" Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
