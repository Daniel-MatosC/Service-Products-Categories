import database from "../database";

const updateCategoriesService = async (name, id) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $1 WHERE ID = $2 RETURNING *",
      [name, id]
    );

    if (res.rows.length === 0) {
      throw "Category not found";
    }

    return { message: "Category Updated", category: res.rows[0] };
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCategoriesService;
