import { ProductModel } from "../Model/Product.js";
export const Product = (req, res, next) => {
  const { title, price, desc } = req.body;
  if (
    typeof title === "string" &&
    typeof price === "number" &&
    typeof desc === "string"
  ) {
    next();
  } else {
    res.status(404).json({ message: "Yanlış data formatı" });
  }
};
export const ProdcutMiddlewareDelete = (req, res, next) => {
  const id = req.params.id;
  ProductModel.findByIdAndDelete(id).then((data) => {
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "mehsul tapilmadi",
      });
    }
    req.product = data;
    next();
  });
};
export const ProdcutMiddlewareUpdate = (req, res, next) => {
  const { title, desc, price } = req.body;
  const id = req.params.id;

  ProductModel.findByIdAndUpdate(id, { title, desc, price })
    .then((data) => {
      if (
        title === null ||
        (typeof title === "string" && desc === null) ||
        (desc === "string" && price === null) ||
        typeof price === "number"
      ) {
        return res.status(200).json({
          success: true,
          message: "ugurlu emeliyat",
        });
      }
      req.product = data;
      next();
    })

    .catch(() => {
      return res.status(404).json({ success: false, message: "error var" });
    });
};
