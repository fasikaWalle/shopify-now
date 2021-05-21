import React, { createContext, useContext } from "react";
import { useProducerReducer } from "./reducers";

const storeContext = createContext(); //global container hold states
const { Provider } = storeContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProducerReducer({
    //instanitate our global state
    products: [],
    categories: [],
    cart: [],
    cartOpen: false,
    currentCategory: "",
  });
  //use this to confirm it works
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(storeContext);
};

export { useStoreContext, StoreProvider };
