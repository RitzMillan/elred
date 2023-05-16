import React from "react";
import "./Category.scss";
import bgimg from "../../Assets/Images/bgimg.png";
import {useDispatch} from 'react-redux'
import {getAllSubcategory} from '../../Store/subcategoryAction'

function Category(props) {
  const category_image = bgimg;
  const dispatch = useDispatch();

  function handleCategoryClick() {
    dispatch(getAllSubcategory(props.item.categoryId));
  }
  return (
    <>
      <div className="category-box-container" onClick={handleCategoryClick}>
        <div
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(217, 217, 217, 0) 35.4%, rgba(0, 0, 0, 0.75) 81.2%), url(${props.item.categoryImageURL !== "" ?props.item.categoryImageURL : category_image})`,
          }}
          className="bgimg"
        />
        <p className="category-name">{props.item.categoryName}</p>
      </div>
    </>
  );
}

export default Category;
