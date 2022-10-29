import database from "../database";

const updateProductsService = async (name, id) => {
  try {
    const res = await database.query(
      "UPDATE products SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );

    if (res.rows.length === 0) {
      throw "Product not found";
    }

    return { message: "Product Updated", product: res.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProductsService;
