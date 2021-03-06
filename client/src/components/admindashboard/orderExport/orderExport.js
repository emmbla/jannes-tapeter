import React from "react";
import OrderCard from "./orderCard/orderCard.js";
import "./orderExport.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import { OrderConsumer } from "../../../context/orderContext";

//Administratörer ska kunna se en lista på alla gjorda beställningar (G)
//Administratörer ska kunna markera beställningar som skickade (VG)

//TODO. Om checkboxen är icheckad så ska OrderCard lägga sig i shipped-order-container
class OrderExport extends React.Component {
  render() {
    return (
      <OrderConsumer>
        {(order) => (
          <React.Fragment>
            <Header />

            <div className="a-content-container">
              <Sidebar />
              <div className="a-child-content-container">
                <h3>Ordrar som ska sändas:</h3>
                <div id="a-not-shipped-order-container">
                  {order.state.allOrders.map(
                    (ord) =>
                      !ord.shipped && (
                        <OrderCard
                          key={ord._id}
                          orderNumber={ord.orderNumber}
                          firstName={ord.customer.firstName}
                          lastName={ord.customer.lastName}
                          totalPrice={ord.totalPrice}
                          shipped={ord.shipped}
                          id={ord._id}
                        />
                      )
                  )}
                </div>
                <h3>Utsända ordrar:</h3>
                <div id="a-shipped-order-container">
                  {order.state.allOrders.map(
                    (ord) =>
                      ord.shipped && (
                        <OrderCard
                          key={ord._id}
                          orderNumber={ord.orderNumber}
                          firstName={ord.customer.firstName}
                          lastName={ord.customer.lastName}
                          totalPrice={ord.totalPrice}
                          shipped={ord.shipped}
                        />
                      )
                  )}
                </div>
              </div>
            </div>
            <Footer />
          </React.Fragment>
        )}
      </OrderConsumer>
    );
  }
}

export default OrderExport;
