import { Router } from "express";

import listCategoriesController from "../controllers/listCategories.controller";
import createCategoriesController from "../controllers/createCategories.controller";
import listCategoriesIdController from "../controllers/listCategoriesId.controller";
import updateCategoriesController from "../controllers/updateCategories.controller";
import deleteCategoriesController from "../controllers/deleteCategories.controller";

const router = Router();

router.post("", createCategoriesController);

router.get("", listCategoriesController);
router.get("/:id", listCategoriesIdController);

router.patch("/:id", updateCategoriesController);

router.delete("/:id", deleteCategoriesController);

export default router;
