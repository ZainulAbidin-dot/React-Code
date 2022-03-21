import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/AdminRestaurant.css";

import AdminEditInfo from "./AdminEditInfo";
import AdminEditWifi from "./AdminEditWifi";
import AdminMenuView from "./AdminMenuView";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Button, Dropdown } from "react-bootstrap";

function Restaurant() {
  const [disable, setDisable] = useState(true);

  const handleDisable = () => {
    if (disable == true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    return disable;
  };

  return (
    <div className="restaurant container-fluid m-0">
      <div className="row m-4 justify-content-center">
        <AdminEditInfo />

        <div className="text-center card card-body">
          <h6>Restaurant Name</h6>
          {/* Restuarant Name Here*/}

          {/* Restaurant Biography */}
          <p>Biography</p>
          <div className="restaurantCard  mx-auto text-center">
            <p className="card-text">
              <img
                src={"/icons/adminstrator-icons/info-restaurant/address.svg"}
                className="restIcon"
                alt="address-icon"
              />
              Street of the restaurant
            </p>
            <p className="card-text">
              <img
                src={"/icons/adminstrator-icons/info-restaurant/telephone.svg"}
                className="restIcon"
                alt="phone-icon"
              />{" "}
              Telephone of the restaurant
            </p>
            <p className="card-text">
              <img
                src={
                  "/icons/adminstrator-icons/info-restaurant/instagram-logo.png"
                }
                className="infoIcon"
                alt="Insta"
              />
              <img
                src={
                  "/icons/adminstrator-icons/info-restaurant/facebook-logo.png"
                }
                className="infoIcon"
                alt="fb"
              />
              <img
                src={
                  "/icons/adminstrator-icons/info-restaurant/whatsapp-logo.png"
                }
                className="infoIcon"
                alt="whatsapp"
              />
              <img
                src={
                  "/icons/adminstrator-icons/info-restaurant/tripadvisor-logo.png"
                }
                className="infoIcon"
                alt="tripadvisor"
              />
            </p>
          </div>
        </div>
      </div>

      <div className="row mx-auto">
        <AdminEditWifi />

        <Button variant="bg-transparent col-6 mx-auto" onClick={handleDisable}>
          <div className="container-fluid border border-dark borderRound modalHead">
            <RemoveRedEyeOutlinedIcon className="me-2 bg-light" />
            wifi visible
          </div>
        </Button>
      </div>

      <div className="row m-5">
        <div className="container-fluid text-center">
          <div className="wifiLine"></div>
          <span className="badge rounded-pill wifiBadge">Wi-Fi</span>
        </div>
      </div>

      <div className="row mt-4 mx-4 text-center restaurantCard color">
        <Dropdown>
          <Dropdown.Toggle
            className="wifi bg-transparent color border-0 wifiInfo p-2"
            disabled={disable}
          >
            Wifi Gratuito
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item className="wifiDrop">
              <div className="card wifiInfo p-2">
                <div className="col">
                  <img
                    src={"/icons/wi-fi-icon/wifi.svg"}
                    className="w-25 wifiIcon"
                    alt=""
                  />
                </div>

                <div className="col">
                  <strong>Servizio Gratuito</strong>
                  <p className="wifiCredentials">LINEA: Wifi name</p>
                  <p className="wifiCredentials">PASSWORD: Password</p>
                </div>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="row">
        <AdminMenuView />
      </div>
    </div>
  );
}

export default Restaurant;
