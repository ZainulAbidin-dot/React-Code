import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/Cart.css";

import { Button, Modal } from "react-bootstrap";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function AddToCart(products) {
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const upQuantity = () => {
    quantity += 1;
  };
  const downQuantity = () => {
    quantity -= 1;
  };

  console.log(products);

  return (
    <>
      <Button variant="bg-transparent" onClick={handleShow}>
        <img
          src={"/icons/cart-icons/add-to-cart.png"}
          alt="E404"
          id={products["restName"] + products["dish"]}
          className="m-1 cartIcon"
        />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="justify-content-start bg-light">
          <Button
            variant="border border-danger text-danger"
            onClick={handleClose}
          >
            Close
          </Button>
          <Modal.Title className="ms-5 text-secondary">
            COMPLETE ORDER / CART
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid text-secondary">
            <div className="row">
              <ul className="nav navbar cartProduct">
                <li className="nav-item">
                  <h6>PRODUCT'S NAME 1</h6>
                </li>
                <li className="nav-item">x2</li>
                <li className="nav-item">4.00 $</li>
                <li className="nav-item text-danger">
                  <CloseRoundedIcon />
                </li>
              </ul>
            </div>

            <div className="row">
              Product Description
              <hr className="mt-2" />
            </div>

            <div className="row">
              <ul className="nav navbar cartProduct">
                <li className="nav-item">
                  <h6>PRODUCT'S NAME 2</h6>
                </li>
                <li className="nav-item">x1</li>
                <li className="nav-item">10.00 $</li>
                <li className="nav-item text-danger">
                  <CloseRoundedIcon />
                </li>
              </ul>
            </div>

            <div className="row">
              Product Description
              <hr className="mt-2" />
            </div>

            {/* ===============implement map above for two rows */}

            <div className="row mt-3 justify-content-end">TOTAL {18.0}$</div>

            <div className="row text-center">
              <form>
                <input
                  type="text"
                  className="form-control mt-3 mx-auto w-50 border-primary text-center"
                  placeholder="Enter table number"
                />

                <input
                  type="text"
                  className="form-control mt-3 border-primary text-center"
                  placeholder="Enter notes"
                />
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <div className="container">
            <div className="row mx-auto m-2 text-center w-50">
              <Button
                className="btn btn-success orderBtn "
                onClick={handleClose}
              >
                SEND ORDER
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddToCart;
