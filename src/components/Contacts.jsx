import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/Contacts.css";

import { Button, Modal } from "react-bootstrap";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

function Contacts() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="bg-transparent" onClick={handleShow}>
        <InfoRoundedIcon className="text-primary" />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="justify-content-end bg-light">
          <div className="container">
            <div className="row">
              <Modal.Title className=" col-9 mx-auto ms-0">Share</Modal.Title>
              <Button
                variant=" col-2 justify-content-end"
                onClick={handleClose}
              >
                <CancelOutlinedIcon className="closeIcon" />
              </Button>
            </div>

            <div className="row text-secondary m-0">Keep in touch with us</div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid text-secondary">
            <div className="row">
              <img
                src={"/icons/adminstrator-icons/info-restaurant/telephone.svg"}
                className="restIcon2 col"
                alt="address-icon"
              />
              <span className="contact col mt-2">+1234567890</span>
              <hr />
            </div>
            <div className="row">
              <img
                src={
                  "/icons/adminstrator-icons/info-restaurant/whatsapp-logo.png"
                }
                className="infoIcon2"
                alt="whatsapp"
              />
              <span className="whatsapp col mt-3">+1234567890</span>
              <hr />
            </div>
            <div className="row">
              <img
                src={"/icons/adminstrator-icons/info-restaurant/address.svg"}
                className="restIcon2"
                alt="address-icon"
              />
              <span className="address col mt-3">
                Address of the restaurant
              </span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Contacts;
