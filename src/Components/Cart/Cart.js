import React from "react";
import "./Cart.scss";
import emptycart from "../../Assets/Images/emptycart.gif";
import product_img from "../../Assets/Images/product.png";
import rclose from "../../Assets/Icons/redx.svg";
import rarrow from "../../Assets/Icons/rarrow.svg";
import { useSelector } from "react-redux";

function Cart() {
  const addToCartData = useSelector((state) => state.addToCartData);

  console.warn("cart length",addToCartData.length)

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <p className="pro">Products</p>
          <p className="qty">QTY</p>
          <p className="pri">Price</p>
        </div>
        {
          (addToCartData.length === 0 ? (
            <div className="empty-cart-holder">
              <img
                src={emptycart}
                alt="empty cart holder"
                className="empty-img"
              />
              <p>Items not added yet</p>
            </div>
          ) : (
            <>
              <div className="cart-items-wraper">
                {addToCartData.map((item, i) => (
                  <CartItems key={i} item={item} />
                ))}
              </div>
              <div className="other-ins">
                <p className="f-14">Other Instructions</p>
                <p className="text-red f-14">
                  Add <img src={rarrow} alt="right" />
                </p>
              </div>
              <p className="order-txt f-14">Purchase Order Number:</p>
              <p className="order-num f-14">1011564321</p>
              <div className="address-title">
                <p className="f-14">Address:</p>
                <p className="text-red f-14">
                  View <img src={rarrow} alt="right" />
                </p>
              </div>
              <div className="address">
                <p className="text-grey f-14">
                  khah adihadk hadh hahd a dlaj dliasdl asdj aw djd w d wj dw
                  ojwoj wdj wo
                </p>
              </div>
              <div className="divider-dashed" />
              <div className="bill">
                <p className="text-grey f-14">Items total</p>
                <p className="text-grey f-14">₹17320</p>
              </div>
              <div className="bill">
                <p className="text-grey f-14">SGST (9%)</p>
                <p className="text-grey f-14">₹17320</p>
              </div>
              <div className="bill">
                <p className="text-grey f-14">CGST (9%)</p>
                <p className="text-grey f-14">₹17320</p>
              </div>
              <div className="bill">
                <p className="text-grey f-14">IGST (9%)</p>
                <p className="text-grey f-14">₹17320</p>
              </div>
              <div className="bill">
                <p className="text-grey f-14">Taxable Amount</p>
                <p className="text-grey f-14">₹17320</p>
              </div>
              <div className="divider" />
              <div className="bill">
                <p className="f-14">
                  <b>Order Total</b>
                </p>
                <p className="f-14">
                  <b>₹17320</b>
                </p>
              </div>
              <div className="button-wraper">
                <button className="btn-small">Clear Cart</button>
                <button className="btn-primary-small">Place Order</button>
              </div>
            </>
          ))
        }
      </div>
    </>
  );
}

export default Cart;

export function CartItems(props) {
  const img = props.item.productImages[0];
  const productImg = img !== undefined ? img : product_img;

  return (
    <>
      <div className="cart-items-container">
        <div className="img-text">
          <div
            className="product-img"
            style={{
              backgroundImage: `url(${productImg})`,
            }}
          />
          <div className="name-text">
            <p className="f-12 t1">
              <b>{props.item.itemDescription}</b>
            </p>
            <p className="f-10 text-grey t1">Magenta | 1 L. | RNB</p>
          </div>
          <div className="qty">
            <p>1</p>
          </div>
          <div className="price">
            <p>
              <b>₹443</b>
            </p>
          </div>
          <div className="rclose">
            <img src={rclose} alt="close" />
          </div>
        </div>
      </div>
    </>
  );
}
