import createCategoriesService from "../services/createCategories.service";

const createCategoriesController = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await createCategoriesService(name);

    const response = {
      message: "Category created",
      category,
    };

    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default createCategoriesController;
