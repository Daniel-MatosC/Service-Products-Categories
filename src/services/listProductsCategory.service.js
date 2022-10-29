import database from "../database";

const listProductsCategoryService = async (id) => {
  try {
    const res = await database.query(
      `SELECT 
                products.name, price, categories.name as category 
            FROM products 
                JOIN categories
                ON products.category_id = $1;
            `,
      [id]
    );

    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductsCategoryService;
