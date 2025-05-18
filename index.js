import express from "express";
import { products } from "./products/product.js";
import { users } from "./products/users.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:keyword", (req, res) => {
  const { keyword } = req.params;

  const findProduct = products.filter((product) =>
    product.keywords.includes(keyword.toLowerCase())
  );
  console.log(findProduct);

  if (!findProduct) {
    return res.json("No product found for this Keyword");
  }

  return res.json(findProduct);
});

app.get("/products/user/:id", (req, res) => {
  const { id } = req.params;

  const userProducts = products.filter((product) => product.userid == id);
  console.log(userProducts);

  if (!userProducts) {
    return res.json("User not found with this id");
  }

  return res.json(userProducts);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const findUser = users.find((user) => user.id === Number(id));

  if (!findUser) {
    return res.json("user Not found");
  }
  res.json(findUser);
});

app.listen(PORT, () => {
  console.log("App running on PORT 3000");
});
