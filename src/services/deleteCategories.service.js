import database from "../database";

const deleteCategoriesService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM categories WHERE id = $1 RETURNING *",
      [id]
    );

    if (res.rows.length === 0) {
      throw "Category not found";
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteCategoriesService;
