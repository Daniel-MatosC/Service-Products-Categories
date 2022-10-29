import listProductsIdService from "../services/listProductsId.service";

const listProductsIdController = async (request, response) => {
  try {
    const { id } = request.params;
    const productsId = await listProductsIdService(id);

    return response.status(200).json(productsId);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default listProductsIdController;
