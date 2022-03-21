import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/AdminEditInfo.css";

import { Button, Modal } from "react-bootstrap";

function AdminEditInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="bg-transparent container" onClick={handleShow}>
        <div className="row badge badge-pill badge-light text-dark border border-dark m-2 edit modalHead">
          <img
            src="/icons/adminstrator-icons/edit.svg"
            alt=""
            className=" col-4 editImg"
          />

          <span className=" col-8">edit info</span>
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
            EDIT INFO
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
              <div className="col-10">
                <label for="restName" class="form-label">
                  RESTAURANT'S NAME
                </label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="restName"
                  placeholder="Enter restaurant's name"
                />
              </div>

              <div className="col-12">
                <label for="biography" class="form-label">
                  BIOGRAPHY
                </label>
                <textarea
                  type="text"
                  className="form-control border border-primary"
                  id="biography"
                  placeholder="Insert biography / hours / discount"
                ></textarea>
              </div>

              <div className="col-10">
                <label for="address" class="form-label">
                  ADDRESS
                </label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="address"
                  placeholder="Insert restaurant's street"
                />
              </div>

              <div className="col-10">
                <label for="telephone" class="form-label">
                  TELEPHONE
                </label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="telephone"
                  placeholder="Insert restaurant's telephone"
                />
              </div>

              <div className="col-10">
                <label for="instagram" class="form-label">
                  INSTAGRAM
                </label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="instagram"
                  placeholder="Insert Instagram username"
                />
              </div>

              <div className="col-10">
                <label for="facebook" class="form-label">
                  FACEBOOK
                </label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="facebook"
                  placeholder="Insert Facebook username"
                />
              </div>

              <div className="col-10">
                <label for="whatsapp" class="form-label">
                  WHATSAPP
                </label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="whatsapp"
                  placeholder="Insert whatsapp number"
                />
              </div>

              <div className="col-10">
                <label for="tripadvisor" class="form-label">
                  TRIPADVISOR
                </label>
                <input
                  type="text"
                  className="form-control border border-primary"
                  id="tripadvisor"
                  placeholder="Insert tripadvisor profile link"
                />
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdminEditInfo;
