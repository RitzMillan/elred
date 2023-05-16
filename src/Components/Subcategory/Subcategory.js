import React from "react";
import "./Subcategory.scss";
import subcategory from "../../Assets/Images/subcategory.png";
import { useDispatch } from "react-redux";
import {height} from '../../Store/heightAction'
import {getAllProducts} from '../../Store/productAction'

function Subcategory1(props) {
  const subcategory_image = subcategory;
  const dispatch = useDispatch();

  function handleSubcategoryClick() {
    dispatch(height(true));
    dispatch(getAllProducts(props.item.subCategoryId));
  }

  return (
    <>
      <div className="subcategory-box-container" onClick={handleSubcategoryClick}>
        <div
          style={{
            backgroundImage: `url(${props.item.subCategoryImageURL !== "" ? props.item.subCategoryImageURL :subcategory_image})`,
          }}
          className="bgimg"
        />
        <p className="subcategory-name">
          <b>{props.item.subCategoryName}</b>
        </p>
      </div>
    </>
  );
}

function Subcategory2(props) {
  const subcategory_image = subcategory;
  const dispatch = useDispatch();

  function handleSubcategoryClick() {
    dispatch(getAllProducts(props.item.subCategoryId));
  }

  return (
    <>
      <div className="subcategory-box-container2" onClick={handleSubcategoryClick}>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(252, 252, 252, 0), rgba(0, 0, 0, 0.6)), url(${props.item.subCategoryImageURL !== "" ? props.item.subCategoryImageURL :subcategory_image})`,
          }}
          className="bgimg"
        />
        <p className="subcategory-name">
          <b>{props.item.subCategoryName}</b>
        </p>
      </div>
    </>
  );
}

export { Subcategory1, Subcategory2 };
