import React, { useState } from "react";
import "./Product.scss";
import product from "../../Assets/Images/product.png";
import heart from "../../Assets/Icons/heart.svg";
// import { useDispatch } from "react-redux";
// import { popup } from "../../Store/popupAction";
import Popup from "../Popup/Popup";

function Product1(props) {
  const item = props.item;

  const [popup, setPopup] = useState(false);
  const img = props.item.productImages[0];
  const productImg = img !== undefined ? img : product;
  // const dispatch = useDispatch();

  function handleClick() {
    // dispatch(popup(true));
    setPopup(true);
  }

  return (
    <>
      <div
        className="product-container selected-border"
        onClick={handleClick}
        tabIndex={1}
      >
        <img src={heart} alt="like" className="heart" />
        <div className="img-container">
          <div
            style={{
              backgroundImage: `url(${productImg})`,
            }}
            className="product-img"
          />
        </div>
        <div className="text-container">
          <p className="f-12">
            <b>{props.item.itemDescription}</b>
          </p>
          <div className="text-grey f-10">
            lorem ipsome dolor sit amet, consec adipiscing...
          </div>
        </div>
      </div>
      {popup && <Popup item={item} setPopup={setPopup} />}
    </>
  );
}

export default Product1;
