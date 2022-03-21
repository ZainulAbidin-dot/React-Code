import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header m-3 text-center">
          <Link to={"/"}>
            <img
              src={"/logo/logo-bump-smart-menu-2.png"}
              className="headerLogo"
              alt=""
            />
          </Link>

          <div className="header text-center">LOGIN</div>
        </div>
        <div className="content">
          <div className="image">
            <img src={"/icons/adminstrator-icons/mobile-login.svg"} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to={"/admin"}>
            <button type="button" className="btn btn-primary">
              Login
              {/* Needs API call */}
            </button>
          </Link>
        </div>

        <div className="container row">
          <div className="col text-center my-3">
            <Link to={"/register"} className="link-secondary">
              Create an account?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
