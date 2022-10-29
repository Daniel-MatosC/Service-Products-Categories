import { Router } from "express";

import createProductsController from "../controllers/createProducts.controller";
import listProductsController from "../controllers/listProducts.controller";
import listProductsIdController from "../controllers/listProductsId.controller";
import updateProductsController from "../controllers/updateProducts.controller";
import deleteProductsController from "../controllers/deleteProducts.controller";
import listProductsCategoryController from "../controllers/listProductsCategory.controller";

const router = Router();

router.post("", createProductsController);

router.get("", listProductsController);
router.get("/:id", listProductsIdController);
router.get("/category/:category_id", listProductsCategoryController);

router.patch("/:id", updateProductsController);

router.delete("/:id", deleteProductsController);

export default router;
