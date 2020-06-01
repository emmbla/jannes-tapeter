import React, { Children } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import RegisterLogin from "./components/registerlogin/registerLogin";
import RegularProducts from "./components/allproducts/allProducts";
import ShoppingCart from "./components/shoppingcart/shoppingCart";
import AdminDashboard from "./components/admindashboard/adminDashboard";
import Test from "./components/test";
import PaymentInfo from "./components/paymentinfo/paymentInfo";
import CustomerProvider from "../src/context/customerContext";
// import ChildrenProducts from "./components/productpage/regularProducts";

function App() {
  return (
    <CustomerProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/register" component={RegisterLogin} />
          <Route path="/products" component={RegularProducts} />
          <Route path="/payment" component={PaymentInfo} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/test" component={Test} />
          {/* <Route path="/forchildren" component={ChildrenProducts} /> */}
        </Switch>
      </Router>
    </CustomerProvider>
  );
}

export default App;
