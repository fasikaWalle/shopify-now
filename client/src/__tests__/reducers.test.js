import { reducer } from "../utils/reducers";
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../utils/actions";

const initialState = {
  products: [],
  categories: [{ name: "food" }],
  currentCategory: "1",
};

test("UPDATE PRODUCT", () => {
  let newState = reducer(initialState, {
    type: UPDATE_PRODUCTS,
    products: [{}, {}],
  });
  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});
test("UPDATE_CATEGORIES", () => {
  const newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}],
  });
  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

test("UPDATE CURRENT CATEGORY", () => {
  const newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: "2",
  });
  expect(newState.currentCategory).toBe("2");
  expect(initialState.currentCategory).toBe("1");
});
