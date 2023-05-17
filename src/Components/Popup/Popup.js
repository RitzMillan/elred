import React, { useState } from "react";
import "./Popup.scss";
import product_big from "../../Assets/Images/product_big.png";
import heart from "../../Assets/Icons/heart.svg";
import close from "../../Assets/Icons/x.svg";
import { CartItems } from "../Cart/Cart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Store/addToCartAction";

function Popup(props) {
  const img = props.item.productImages[0];
  const productImg = img !== undefined ? img : product_big;

  const dispatch = useDispatch();

  const [orderList, setOrderList] = useState([]);

  function handleAdd() {
    setOrderList((oldArray) => [...oldArray, props.item]);
  }

  function handleAddToCart() {
    dispatch(addToCart(orderList));
  }

  function handlePopupClose() {
    props.setPopup(false);
  }

  console.warn("popup opened", props);
  console.warn("Order List", orderList);

  return (
    <>
      <div className="popup-container-wraper">
        <div className="popup-container">
          <div className="left">
            <div className="header">
              <p className="f-22">
                <b>{props.item.itemDescription}</b>
              </p>
            </div>
            <div className="left-body-container">
              <div className="left-body">
                <div
                  className="big-product-img"
                  style={{
                    backgroundImage: `url(${productImg})`,
                  }}
                >
                  <img src={heart} alt="like" className="heart" />
                </div>
                <p className="text-grey f-12">#000789</p>
                <div className="name-price">
                  <p className="f-16">
                    <b>{props.item.itemDescription}</b>
                  </p>
                  <p className="f-16">
                    <b>{props.item.currency.symbol}300</b>
                  </p>
                </div>
                <p className="f-10 text-grey product-description-text">
                  kuh adkha dakisdj suhe akudh asdkj d aoidh ad adi adia daid
                  oasid adiu aqofiqep uwef wef pwe fwe we wp uwpgu wp gpwr gwr{" "}
                </p>
                <p className="f-14 color-description">
                  Please Select Color Description
                </p>
                <div className="cell-container">
                  {props.item.variants.map((item, i) => (
                    <Cell1 key={i} item={item} />
                  ))}
                </div>
                <p className="f-14 color-description">
                  Please Select Packaging Description
                </p>
                <div className="cell-container">
                  {props.item.variants.map((item, i) => (
                    <Cell2 key={i} item={item} />
                  ))}
                </div>
                <p className="f-14 color-description">Enter Quantity</p>
                <input type="text" className="qty-input" />
                <p className="f-10 text-red">Minimum orders 12*</p>
                <label className="checkbox">
                  Need Urgent order
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <div className="button-wraper" onClick={handleAdd}>
                  <button className="btn-outline">ADD</button>
                </div>
              </div>
            </div>
          </div>
          <div className="v-divider" />
          <div className="right">
            <div className="header">
              <p className="f-22">
                <b>Order List</b>
              </p>
              <img src={close} alt="close" onClick={handlePopupClose} />
            </div>
            <div className="header-two">
              <p className="pro">Products</p>
              <p className="qty">QTY</p>
              <p className="pri">Price</p>
            </div>
            <div className="cartitems-wraper">
              {orderList.map((item, i) => (
                <CartItems key={i} item={item} />
              ))}
            </div>
            <div className="btn-container" onClick={handleAddToCart}>
              <button className="btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;

export function Cell1(props) {
  return (
    <>
      <div className="cell-wraper">
        <div className="cell-name selected-cell" tabIndex={1}>
          {props.item.colorDescription}
        </div>
      </div>
    </>
  );
}

export function Cell2(props) {
  return (
    <>
      <div className="cell-wraper">
        <div className="cell-name selected-cell" tabIndex={1}>
          {props.item.packingDescription}
        </div>
      </div>
    </>
  );
}
