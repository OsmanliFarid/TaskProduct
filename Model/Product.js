import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
  title: String,
  desc: String,
  price: Number,
});

export const ProductModel = model("product", ProductSchema);
