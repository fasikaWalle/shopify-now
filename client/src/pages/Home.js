import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import {UPDATE_CURRENT_CATEGORY} from '../utils/actions'
import {useStoreContext} from '../utils/GlobalState'
const Home = () => {
  const [currentCategory, setCategory] = useState("");
  const [state,dispatch]=useStoreContext()
  const {currentCategory}=state
  
  return (
    <div className="container">
      <CategoryMenu  />
      <ProductList  />
    </div>
  );
};

export default Home;
