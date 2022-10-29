import updateProductsService from "../services/updateProducts.service";

const updateProductsController = async (request, response) => {
  const { name } = request.body;
  const { id } = request.params;

  try {
    const product = await updateProductsService(name, id);

    return response.status(200).json(product);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateProductsController;
