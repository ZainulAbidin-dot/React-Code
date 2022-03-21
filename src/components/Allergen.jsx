import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/Allergen.css";
import { Button, Modal } from "react-bootstrap";

function Allergen() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const allergens = [
    "celery",
    "crustacens",
    "eggs",
    "fish",
    "gluten",
    "lactose",
    "lupin",
    "molluscs",
    "mustard",
    "peanut",
    "sesame",
    "soya",
    "sulphurdioxide",
    "treenut",
  ];

  return (
    <div>
      <Button variant="btnAllergen" onClick={handleShow}>
        <img
          src={"/icons/allergen-icons/allergens-grey/wheat-grey.svg"}
          id="allergenIcon"
          className="allergenIcon"
          alt="allergenIcon"
        />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="border border-warning text-warning">
          <Modal.Header>
            <Button
              variant="border border-warning text-warning"
              onClick={handleClose}
            >
              Close
            </Button>
            <Modal.Title>
              <div className="ModalHeading text-warning">ALLERGENS</div>
            </Modal.Title>
          </Modal.Header>
        </div>
        <Modal.Body>
          <div className="container text-center">
            <h6>Select the Allergens to Exclude</h6>
            <div className="row">
              <div className="card card-body m-2 border border-warning">
                <div className="allergenContainer">
                  {allergens.map((allergen) => {
                    return (
                      <div className="allergenCol badge border border-success text-success">
                        <img
                          src={`/icons/allergen-icons/allergens-yellow/${allergen}.svg`}
                          width="30%"
                        />
                        {allergen}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="warning text-light" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Allergen;
