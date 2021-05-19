import { reducer } from "../utils/reducers";
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART,
} from "../utils/actions";

const initialState = {
  products: [],
  categories: [{ name: "food" }],
  currentCategory: "1",
  cart: [
    {
      _id: "1",
      name: "Soup",
      purchaseQuantity: 1,
    },
    {
      _id: "2",
      name: "Bread",
      purchaseQuantity: 2,
    },
  ],
  cartOpen: false,
};
test("ADD TO CART", () => {
  let newState = reducer(initialState, {
    type: ADD_TO_CART,
    product: { purchaseQuantity: 1 },
  });
  expect(newState.cart.length).toBe(3);
  expect(initialState.cart.length).toBe(2);
});

test("ADD MULTIPLE TO CART", () => {
  let newState = reducer(initialState, {
    type: ADD_MULTIPLE_TO_CART,
    products: [{}, {}],
  });
  expect(newState.cart.length).toBe(4);
  expect(initialState.cart.length).toBe(2);
});
test("REMOVE FROM THE CART", () => {
  let newState = reducer(initialState, {
    type: REMOVE_FROM_CART,
    _id: "1",
  });
  expect(newState.cartOpen).toBe(true);
  expect(newState.cart.length).toBe(1);
  expect(newState.cart[0]._id).toBe("2");
  let newState2 = reducer(newState, {
    type: REMOVE_FROM_CART,
    _id: "2",
  });
  expect(newState2.cartOpen).toBe(false);
  expect(initialState.cart.length).toBe(2);
});

test("CLEAR CART", () => {
  let newState = reduce(initialState, {
    type: CLEAR_CART,
  });
  expect(newState.carOpen).toBe(false);
  expect(newState.cart.length).toBe(0);
  expect(initialState.art.length).toBe(2);
});
test("UPDATE CART QUANTITY", () => {
  let newState = reducer(initialState, {
    type: UPDATE_CART_QUANTITY,
    _id: "1",
    purchaseQuantity: 3,
  });
});

test("TOOGLE HANDLER", () => {
  let newState = reducer(initialState, {
    type: TOGGLE_CART,
  });
  expect(newState.cartOpen).toBe(true);
  expect(initialState.cartOpen).toBe(false);

  let newState2 = reducer(newState, {
    type: TOGGLE_CART,
  });
  expect(newState2.cartOpen).toBe(false);
});
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
