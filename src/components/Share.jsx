import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/Share.css";

import { Button, Modal } from "react-bootstrap";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";

function Share() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="bg-transparent" onClick={handleShow}>
        <ShareRoundedIcon className="text-primary" />
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header className="justify-content-end bg-light">
          <div className="container">
            <div className="row">
              <Modal.Title className=" col-9 mx-auto ms-0">Share</Modal.Title>
              <Button variant=" col-2" onClick={handleClose}>
                <CancelOutlinedIcon className="closeIcon" />
              </Button>
            </div>

            <div className="row text-secondary ms-0">
              Share menu with your friends
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row my-1" onClick={handleClose}>
              <div className="col-10">
                <img
                  src="/icons/adminstrator-icons/info-restaurant/whatsapp-logo.png"
                  alt=""
                  width={"40px"}
                  className="m-1 me-3"
                />
                Whatsapp
              </div>

              <div className="col-2 text-secondary">
                <ArrowForwardIosIcon />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Share;
