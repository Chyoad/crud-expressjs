import express, { json } from "express";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

import apiRouter from "./routes/index.js";
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});