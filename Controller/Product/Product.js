import mongoose from "mongoose";
import { ProductModel } from "../../Model/Product.js";

export const ProductAll = (req, res) => {
  ProductModel.find()
    .then((data) => {
      res.status(200).json({
        success: true,
        data,
      });
    })
    .catch(() => {
      res.status(404).json({
        success: false,
        message: "error 404",
      });
    });
};

export const ProductCreate = (req, res) => {
  const products = req.body;
  ProductModel.create(products)
    .then((data) => {
      res.status(201).json({
        success: true,
        data,
      });
    })
    .catch(() => {
      res.status(404).json({
        success: false,
        message: "error var",
      });
    });
};
export const ProductDelete = (req, res) => {
  res.status(200).json({ success: true, data: req.product });
};
export const ProductUpdate = (req, res) => {
  res.status(200).json({
    success: true,
    data: req.product,
  });
};
