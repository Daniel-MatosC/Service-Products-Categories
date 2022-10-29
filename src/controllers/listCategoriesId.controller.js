import listCategoriesIdService from "../services/listCategoriesId.service";

const listCategoriesIdController = async (request, response) => {
  try {
    const { id } = request.params;
    const categoriesId = await listCategoriesIdService(id);

    return response.status(200).json(categoriesId);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default listCategoriesIdController;
