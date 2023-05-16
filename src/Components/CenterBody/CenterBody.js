import React, { useEffect } from "react";
import "./CenterBody.scss";
import search from "../../Assets/Icons/search.svg";
import filter from "../../Assets/Icons/filter.svg";
import dropdown2 from "../../Assets/Icons/dropdown2.svg";
import Category from "../Category/Category";
import back from "../../Assets/Icons/arrow-left.svg";
import { Subcategory1 } from "../Subcategory/Subcategory";
import Product1 from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Store/categoryAction";
import {height} from '../../Store/heightAction'

function CenterBody() {
  const heightData = useSelector((state) => state.heightData);
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.categoryData);
  const subcategoryData = useSelector((state) => state.subcategoryData);
  const productData = useSelector((state) => state.productData);

  function handleBack() {
    dispatch(height(false));
  }

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <>
      <div
        className="CenterBody-container"
        style={{
          height: heightData ? `calc(100vh - 240px)` : `calc(100vh - 145px)`,
        }}
      >
        <div className="header">
          <div className="left">
            <p className="f-22">
              {!heightData ? (
                <b>Print Heads</b>
              ) : (
                <>
                  <img src={back} alt="back button" className="backbutton" onClick={handleBack}/>
                  <b>All Products</b>
                </>
              )}
            </p>
          </div>
          <div className="right">
            <div className="search">
              <span>
                <img src={search} alt="search" className="fa fa-search" />
              </span>
              <input placeholder="Search..." />
            </div>
            <div className="filter">
              <img src={filter} alt="filter icon" className="filter-icon" />
              <p className="text-grey">Filters</p>
              <img
                src={dropdown2}
                alt="dropdown icon"
                className="dropdown-icon"
              />
            </div>
          </div>
        </div>
        {!heightData ? (
          <>
            <div className="category-container">
              {categoryData.map((item, i) => (
                <Category key={i} item={item} />
              ))}
            </div>
            <div className="divider" />
            <div className="subcategory-container">
              {subcategoryData.map((item, i) => (
                <Subcategory1 key={i} item={item} />
              ))}
              
            </div>
          </>
        ) : (
          <div className="allproducts-container">
            {productData.map((item, i) => (
              <Product1 key={i} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CenterBody;
