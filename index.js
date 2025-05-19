import express from "express";
import { products } from "./products/product.js";
import { users } from "./products/users.js";
import path from "path";
import productRouter from "./routes/product.route.js";
import userRouter from "./routes/user.route.js";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const filePath = path.join(process.cwd(), "index.html");
  console.log("Serving file:", filePath);

  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending index.html:", err);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
