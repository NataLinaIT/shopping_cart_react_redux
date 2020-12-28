import "./Cart.css";

const Cart = (props) => {
  let goods = props.goodsObj;
  let cart = props.cart;
  return (
    <>
      <h3>Cart</h3>
      <div className="table_cart">
        <div className="table_header">
          <div>Good image</div>
          <div>Good title</div>
          <div>Good price</div>
          <div>Quantity</div>
          <div>Total item price</div>
        </div>
        <ul>
          {Object.keys(cart).map((item) => (
            <li
              className="table_item"
              data-key={goods[item]["articul"]}
              key={item + goods[item]["title"]}
            >
              <div>
                <img src={goods[item]["image"]} alt="" />
              </div>
              <div>{goods[item]["title"]}</div>
              <div>{goods[item]["cost"]}</div>
              <div>
                <i
                  className="fas fa-minus"
                  title="Minus item"
                  data-key={goods[item]["articul"]}
                ></i>
                {cart[item]}
                <i
                  className="fas fa-plus"
                  title="Plus item"
                  data-key={goods[item]["articul"]}
                ></i>
              </div>
              <div>{cart[item] * goods[item]["cost"]}</div>
              <i
                className="fas fa-times"
                title="Remove from cart"
                data-key={goods[item]["articul"]}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="order_total">
        Total order price: <span className="total_sum">{props.totalPrice}</span>
      </div>
    </>
  );
};

export default Cart;
