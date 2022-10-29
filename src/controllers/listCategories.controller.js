import listCategoriesService from "../services/listCategories.service";

const listCategoriesController = async (request, response) => {
  try {
    const categories = await listCategoriesService();
    return response.status(200).json(categories);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default listCategoriesController;
