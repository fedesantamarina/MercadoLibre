import React from "react";
import { CategoryContext } from "../CategoryContext";
import "./Breadcrumb.scss";
const Breadcrumb = () => {
  const { categories } = React.useContext(CategoryContext);
  return (
    <div className="breadcrumb">
      {categories &&
        categories.map((category, index) => (
          <span key={category} className="category">
            {index > 0 && <span>&nbsp; &gt; </span>} {category}
          </span>
        ))}
    </div>
  );
};

export default Breadcrumb;
