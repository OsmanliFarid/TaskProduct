import { Router } from "express";
import {
  ProductAll,
  ProductCreate,
  ProductDelete,
  ProductUpdate,
} from "../Controller/Product/Product.js";
import {
  ProdcutMiddlewareDelete,
  ProdcutMiddlewareUpdate,
  Product,
} from "../Middleware/ProdcutMiddleware.js";

export const ProductRouter = new Router();

ProductRouter.get("/", ProductAll);
ProductRouter.post("/", Product, ProductCreate);
ProductRouter.delete("/:id", ProdcutMiddlewareDelete, ProductDelete);
ProductRouter.put("/:id", ProdcutMiddlewareUpdate, ProductUpdate);
