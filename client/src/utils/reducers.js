//A reducer is a function that updates state by returning a new state object
// and never alters the original state object.
import { useReducer } from "react";

import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      return { ...state, categories: [...action.categories] };
    case UPDATE_PRODUCTS:
      return { ...state, products: [...action.products] };
    case UPDATE_CURRENT_CATEGORY:
      return { ...state, currentCategory: action.currentCategory };
    default:
      return state;
  }
};
export function useProducerReducer(initialState) {
  return useReducer(reducer, initialState);
}
