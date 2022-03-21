import React from "react";
import "./style-sheets/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Cart from "./Cart";
import Contacts from "./Contacts";
import Categories from "./Categories";
import Share from "./Share";

function Footer() {
  return (
    <div className="footer container-fluid bg-light m-0 mt-5">
      <ul className="footerRow nav navbar text-primary">
        <li className="nav-item m-2">
          <Contacts />
        </li>
        <li className="nav-item m-2">
          <Categories />
        </li>
        <li className="nav-item m-2">
          <Cart />
        </li>
        <li className="nav-item m-2">
          <Share />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
