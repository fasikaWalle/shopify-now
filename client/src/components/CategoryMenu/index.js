import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  UPDATE_PRODUCTS,
} from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
function CategoryMenu() {
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  const [state, dispatch] = useStoreContext();
  const { categories } = state;
  // const categories = categoryData?.categories || [];
  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, dispatch]);

  const clickHandler = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };
  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button key={item._id} onClick={() => clickHandler(item._id)}>
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
