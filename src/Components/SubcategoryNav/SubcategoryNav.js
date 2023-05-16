import React from "react";
import "./SubcategoryNav.scss";
import home from "../../Assets/Icons/home.svg";
import { Subcategory2 } from "../Subcategory/Subcategory";
import { useSelector } from "react-redux";

function SubcategoryNav() {
  const subcategoryData = useSelector((state) => state.subcategoryData);

  return (
    <div className="SubcategoryNav-container">
      <div className="home-wraper">
        <img src={home} alt="home" className="home-icon" />
      </div>
      <div className="subcategory-wraper">
        {subcategoryData.map((item, i) => (
          <Subcategory2 key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default SubcategoryNav;
