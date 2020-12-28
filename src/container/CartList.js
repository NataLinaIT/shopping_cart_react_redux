import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import {
  selectCart,
  selectTotalPrice,
  minusItem,
  plusItem,
  deleteItem,
} from "../store/cartSlice";
import Cart from "../components/Cart/Cart";

const CartList = () => {
  const dispatch = useDispatch();
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalPrice);
  const goodsObj = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});

  const clickHandler = (event) => {
    event.preventDefault();
    let t = event.target;
    let dataKey = t.getAttribute("data-key");

    if (t.classList.contains("fa-minus")) {
      dispatch(minusItem(dataKey));
      for (let key in cart) {
        if (key === dataKey && cart[dataKey] === 1) {
          dispatch(deleteItem(dataKey));
        }
      }
    } else if (t.classList.contains("fa-plus")) {
      dispatch(plusItem(dataKey));
    } else if (t.classList.contains("fa-times")) {
      dispatch(deleteItem(dataKey));
    } else {
      return true;
    }
  };

  return (
    <div className="cart_content" onClick={clickHandler}>
      <Cart cart={cart} goodsObj={goodsObj} totalPrice={totalPrice}/>
    </div>
  );
};

export default CartList;
