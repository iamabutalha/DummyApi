import { products } from "../products/product.js";

export const getAllProducts = (req, res) => {
  res.json(products);
};

export const getProductByKeyWord = (req, res) => {
  const { keyword } = req.params;

  const findProduct = products.filter((product) =>
    product.keywords.includes(keyword.toLowerCase())
  );
  console.log(findProduct);

  if (findProduct.length === 0) {
    return res.json("No product found for this Keyword");
  }

  return res.json(findProduct);
};

export const getProductsOfUser = (req, res) => {
  const { id } = req.params;

  const userProducts = products.filter((product) => product.userid == id);
  console.log(userProducts);

  if (!userProducts) {
    return res.json("User not found with this id");
  }

  return res.json(userProducts);
};
