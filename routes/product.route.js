import express from "express";
import {
  getAllProducts,
  getProductByKeyWord,
  getProductsOfUser,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:keyword", getProductByKeyWord);
router.get("/user/:id", getProductsOfUser);

export default router;
