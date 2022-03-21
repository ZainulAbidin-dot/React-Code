import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/AddToCart.css";

import { Button, Modal } from "react-bootstrap";

function AddToCart(product) {
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   let quantity = product["quantity"];

  const upQuantity = () => {
    quantity += 1;
  };
  const downQuantity = () => {
    quantity -= 1;
  };

  console.log(product);

  return (
    <>
      <Button variant="bg-transparent" onClick={handleShow}>
        <img
          src={"/icons/cart-icons/add-to-cart.png"}
          alt="E404"
          id={product["restName"] + product["dish"]}
          className="m-1"
        />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="justify-content-start">
          <Button
            variant="border border-danger text-danger"
            onClick={handleClose}
          >
            Close
          </Button>
          <Modal.Title className="ms-5">ADD TO CART</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <img
                src={product["photo"]}
                alt="E404"
                className="border border-secondary rounded productPhoto"
              />
            </div>
            <div className="row mt-3">
              <h4>{product["dish"]}</h4>
            </div>
            <div className="row">
              <p className="text-secondary">{product["description"]}</p>
            </div>
            <div className="row">
              <h6 className="text-secondary">Price {product["price"]}€</h6>
            </div>

            <div className="row text-secondary">
              <p>
                Quantity
                <span className="border border-secondary rounded ms-2">
                  <button
                    className="btn p-1 py-0"
                    onClick={() => {
                      setQuantity(quantity - 1);
                    }}
                  >
                    -
                  </button>
                  {quantity}
                  {console.log(quantity)}
                  <button
                    className="btn p-1 py-0"
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    +
                  </button>
                </span>
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <div className="container-fluid">
            <div className="row m-2 mx-5">
              <Button
                className="btn btn-success orderBtn "
                onClick={handleClose}
              >
                <img
                  src={"/icons/cart-icons/add-to-cart-green(2).png"}
                  id="orderIcon"
                  className="me-2"
                  alt="E404"
                />
                Add to order
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddToCart;
