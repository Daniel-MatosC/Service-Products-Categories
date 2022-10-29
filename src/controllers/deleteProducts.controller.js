import deleteProductsService from "../services/deleteProducts.service";

const deleteProductsController = async (request, response) => {
  const { id } = request.params;

  try {
    const deletedProduct = await deleteProductsService(id);

    return response.status(204).json(deletedProduct);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default deleteProductsController;
