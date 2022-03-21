import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/Header.css";
import { Link } from "react-router-dom";

import Allergen from "./Allergen";
import Cart from "./Cart";

import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

function Header() {
  return (
    <div className="header bg-light">
      <div className="headerNav">
        <div>
          <img
            src={"/logo/logo-bump-smart-menu-2.png"}
            className="headerLogo"
            alt=""
          />
        </div>
        <div className="container-fluid justify-content-end options">
          <div className="me-2">
            <Link to="/login">
              <LoginRoundedIcon fontSize="large" className="text-secondary" />
            </Link>
          </div>
          <div>
            <Cart />
          </div>
          <div>
            <Allergen />
          </div>
          <div>
            <img
              src={"/icons/flag-icons/italian-language.png"}
              className="headerIcons flag ms-2"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Header;
