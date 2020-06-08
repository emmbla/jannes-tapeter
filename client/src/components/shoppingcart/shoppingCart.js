import React from "react";
import Header from "../header/header";
import DeliveryMethods from "../deliverymethods/deliveryMethods";
import ProductInCart from "../ProductInCart/ProductInCart";
import PaymentMethods from "../paymentmethods/paymentMethods";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { OrderConsumer } from "../../context/orderContext";

import "./shoppingCart.css";

class ShoppingCart extends React.Component {
  render() {
    return (
      <OrderConsumer>
        {(order) => (
          <React.Fragment>
            <Header />
            <div className="shoppingcart-wrapper">
              <section className="cartrow-div">
                <h4>Din korg</h4>
                {order.state.cart.map((product) => (
                  <ProductInCart
                    key={product.product._id}
                    url={product.product.url}
                    brand={product.product.brand}
                    dimensions={product.product.dimensions}
                    price={product.product.price}
                    quantity={product.quantity}
                  />
                ))}

                <div className="totalDiv">
                  <p>Total</p>
                  <p>{order.cartTotalPrice()}</p>
                </div>
              </section>
              <section className="delivery-payment-div">
                <div className="flexing-delivery-div">
                  <h4>Leverans</h4>
                  <div className="divForRadioAndImg">
                    <DeliveryMethods />
                  </div>
                </div>
                <div className="flexing-delivery-div">
                  <h4>Betalningsmetod</h4>
                  <div className="divForRadioAndImg">
                    <PaymentMethods />
                  </div>
                </div>
                <button id="paymentBtn" variant="contained">
                  <Link to="/payment">Till betalning</Link>
                </button>
              </section>
            </div>
            <Footer />
          </React.Fragment>
        )}
      </OrderConsumer>
    );
  }
}

export default ShoppingCart;
