import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/AdminEditWifi.css";

import { Button, Modal } from "react-bootstrap";

function AdminEditWifi() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="bg-transparent col-6 mx-auto" onClick={handleShow}>
        <div className="container-fluid border border-dark borderRound modalHead">
          <img
            src="/icons/adminstrator-icons/edit.svg"
            className="my-1 me-2 editWifiImg"
            alt=""
          />
          edit wifi
        </div>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="border border-light modalBody"
        centered
      >
        <Modal.Header className="justify-content-start modalHead">
          <Button
            variant="border border-danger text-danger bg-light mx-auto ms-1"
            onClick={handleClose}
          >
            Close
          </Button>
          <Modal.Title className="mx-auto text-secondary">
            EDIT WIFI SECTION
          </Modal.Title>
          <Button
            variant="border border-primary text-primary bg-light mx-auto me-1"
            onClick={handleClose}
          >
            Save
          </Button>
        </Modal.Header>
        <Modal.Body className="backColor border border-secondary">
          <div className="container">
            <form className="row g-3">
              <div className="col-12 text-center">
                <label for="wifi" className="form-label mx-auto">
                  <h3>WI-FI</h3>
                </label>
                <input
                  type="text"
                  className="form-control border border-primary modalBody"
                  id="wifi"
                  placeholder="WI-FI GRATUITO"
                />
              </div>

              <div className="row mt-3">
                <span className=" col-4">LINEA WIFI:</span>
                <input
                  type="text"
                  className="form-control border border-primary w-50 rounded"
                  id="wifiName"
                  placeholder="Insert name of wifi"
                />
              </div>

              <div className="row mt-3">
                <span className=" col-4">PASSWORD:</span>
                <input
                  type="text"
                  className="form-control border border-primary w-50 rounded"
                  id="wifiPassword"
                  placeholder="Insert password"
                />
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdminEditWifi;
