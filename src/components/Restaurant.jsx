import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/Restaurant.css";
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import PhotoUpload from "./PhotoUpload";

function Restaurant() {
  return (
    <div className="restaurant container-fluid m-0">
      <div className="restaurantLogo m-0">
        <Link to={"/"}>
          <PhotoUpload />
        </Link>
      </div>

      <div className="row m-4">
        <div className="text-center">
          <h6>Restaurant Name</h6>
          {/* Restuarant Name Here*/}

          {/* Restaurant Biography */}
          <p>Biography</p>
          <div className="restaurantCard card card-body mx-auto text-center">
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

      <div className="row m-5">
        <div className="container-fluid text-center">
          <div className="wifiLine"></div>
          <span className="badge rounded-pill wifiBadge">Wi-Fi</span>
        </div>
      </div>

      <div className="row mt-4 mx-4 text-center restaurantCard color">
        <Dropdown>
          <Dropdown.Toggle className="wifi bg-transparent color border-0 wifiInfo p-2">
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
    </div>
  );
}

export default Restaurant;
