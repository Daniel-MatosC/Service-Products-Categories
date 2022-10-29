import listProductsCategoryService from "../services/listProductsCategory.service";

const listProductsCategoryController = async (request, response) => {
  try {
    const { category_id } = request.params;
    const products = await listProductsCategoryService(category_id);

    return response.status(200).json(products);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listProductsCategoryController;
