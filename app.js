import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { ProductRouter } from "./Routes/Product.js";
const app = express();
const port = 8080;
dotenv.config();
const url = "/api/v1/product";
app.use(express.json());
mongoose.connect(process.env.DB_URI).then(() => {
  console.log("ugurla quruldu");
});
app.listen(port, () => {
  console.log("ugurlu port");
});
app.use(url, ProductRouter);
console.log("hello");
