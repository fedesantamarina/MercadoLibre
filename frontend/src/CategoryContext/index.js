import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});
  console.log(categories);
  return (
    <CategoryContext.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
