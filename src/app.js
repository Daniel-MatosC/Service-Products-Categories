import express from "express";
import { startDatabase } from "./database";
import "dotenv/config";

import categoryRouter from "./routes/categories.routes";
import productsRouter from "./routes/products.routes";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  startDatabase();
});

app.use("/categories", categoryRouter);
app.use("/products", productsRouter);

export default app;
