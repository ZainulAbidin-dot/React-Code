import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/AdminHeader.css";
import { Link } from "react-router-dom";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function Header() {
  return (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="col-8">
          <img
            src="/icons/adminstrator-icons/settings/00-setting-logo.svg"
            alt="Settings Icon 404"
            width={"30px"}
            className="me-3"
          />
          <a href="#" className="link-dark">
            Settings
          </a>
        </div>

        {/* <div className="col-5"></div> */}
        <div className="col-4 d-flex flex-row-reverse">
          <Link to={"/"} className="text-dark">
            Logout
            <LogoutRoundedIcon className="ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
