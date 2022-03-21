import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/Categories.css";

import { Button, Modal } from "react-bootstrap";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import TableRowsRoundedIcon from "@mui/icons-material/TableRowsRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Categories() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categories = [
    "Beef",
    "Pizza",
    "Sushi",
    "Wine List",
    "Beverage",
    "Dessert",
  ];

  return (
    <>
      <Button variant="bg-transparent" onClick={handleShow}>
        <TableRowsRoundedIcon className="text-primary" />
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header className="justify-content-end bg-light">
          <div className="container">
            <div className="row">
              <Modal.Title className=" col-9 mx-auto ms-0">
                Categories
              </Modal.Title>
              <Button variant=" col-2" onClick={handleClose}>
                <CancelOutlinedIcon className="closeIcon" />
              </Button>
            </div>

            <div className="row text-secondary ms-0">
              Quickly displays the menu categories
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {categories.map((item, index) => (
              <>
                <div className="row my-1" onClick={handleClose}>
                  <div className="col-10">
                    <a href={`#${item}`} className="link-secondary">
                      <img
                        src={`/icons/food-icons/food-icons/food/${item.toLowerCase()}.svg`}
                        alt="404"
                        width={"10%"}
                        height={"40px"}
                        className="me-2"
                      />
                      {item}
                    </a>
                  </div>

                  <div className="col-2 text-secondary">
                    <ArrowForwardIosIcon />
                  </div>
                </div>

                <hr />
              </>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Categories;
