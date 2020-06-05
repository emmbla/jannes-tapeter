import React from "react";
import "./welcomeAdmin.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Sidebar from "../sidebar/sidebar";
import Typography from '@material-ui/core/Typography';
import WelcomeList from './welcomeList'

const WelcomeAdmin = () => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <div className="master-container">
        <div className="master-content">
          <h2 className="welcome">
            Välkommen Admin!
        </h2>
          <span className="welcomeText">
            Du som inloggad administratör har speciella rättigheter som en vanlig användare inte har.
            Du kan se i menyn till vänster vad du har möjlighet att göra.
              </span>
          <WelcomeList />
        </div>
      </div>
      <Footer />
    </React.Fragment >
  );
};


export default WelcomeAdmin;
