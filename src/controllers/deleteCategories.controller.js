import deleteCategoriesService from "../services/deleteCategories.service";

const deleteCategoriesController = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await deleteCategoriesService(id);

    const response = {
      message: "Category deleted",
      category,
    };

    return res.status(204).json(response);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default deleteCategoriesController;
