import updateCategoriesService from "../services/updateCategories.service";

const updateCategoriesController = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  try {
    const updatedCategory = await updateCategoriesService(name, id);
    return response.json(updatedCategory);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default updateCategoriesController;
