import createProductsService from "../services/createProducts.service";

const createProductsController = async (request, response) => {
  try {
    const { name, price, category_id } = request.body;
    const product = await createProductsService(name, price, category_id);

    const res = {
      message: "Product created",
      product,
    };

    return response.status(201).json(res);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default createProductsController;
