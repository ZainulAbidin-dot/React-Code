import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/AdminEditWifi.css";
import "./style-sheets/AdminEditMenu.css";

import {
  FaAccusoft,
  FaCamera,
  FaDrum,
  FaPlus,
  FaSort,
  FaSortDown,
  FaSortUp,
  FaTrash,
  FaWineGlass,
} from "react-icons/fa";
import { Button, Modal, Alert } from "react-bootstrap";

function AdminEditMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [menuItems, setMenuItems] = useState([
    { id: 1, title: "SUSHI", icon: <FaAccusoft /> },
    { id: 2, title: "HAMBURGER", icon: <FaDrum /> },
    { id: 3, title: "SECTION", icon: <FaCamera /> },
    { id: 4, title: "WINE LIST", icon: <FaWineGlass /> },
  ]);
  const [sort, setSort] = useState(false);
  const [del, setDel] = useState(false);

  const moveUp = (id) => {
    const list = [...menuItems];
    const currPos = list.findIndex((item) => item.id === id);
    const newPos = currPos === 0 ? list.length - 1 : currPos - 1;
    [list[currPos], list[newPos]] = [list[newPos], list[currPos]];
    setMenuItems(list);
  };
  const moveDown = (id) => {
    const list = [...menuItems];
    const currPos = list.findIndex((item) => item.id === id);
    const newPos = currPos === list.length - 1 ? 0 : currPos + 1;
    [list[currPos], list[newPos]] = [list[newPos], list[currPos]];
    setMenuItems(list);
  };

  const deleteItem = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete it");
    if (confirmDelete) setMenuItems(menuItems.filter((item) => item.id !== id));
  };

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

      <div className="AEMContainer">
        <Button>Close</Button>
        <h3>EDIT MENU SECTION</h3>
        <Button>Save</Button>
      </div>

      <div className="btnContainer">
        <Button onClick={() => setSort((prev) => !prev)}>
          <span>
            <FaSort />
          </span>
          <span>Sort Sections</span>
        </Button>
        <Button onClick={() => setDel((prev) => !prev)}>
          <span>
            <FaTrash />
          </span>
          <span>Delete Sections</span>
        </Button>
      </div>

      <div className="contentContainer">
        <h2>MENU</h2>
        <ul className="menu">
          {menuItems.map((item) => (
            <li>
              <span className="item-icon">{item.icon}</span>
              <span className="item-title">{item.title}</span>
              <span className="item-sort">
                {sort && (
                  <>
                    <button onClick={() => moveUp(item.id)}>
                      <FaSortUp />
                    </button>
                    <button onClick={() => moveDown(item.id)}>
                      <FaSortDown />
                    </button>
                  </>
                )}
              </span>
              <span className="item-sort">
                {del && (
                  <button onClick={() => deleteItem(item.id)}>
                    <FaTrash />
                  </button>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="addSection">
        <Button>
          <FaPlus /> Add New Section
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="border border-light modalBody"
        centered>
        <Modal.Header className="justify-content-start modalHead">
          <Button
            variant="border border-danger text-danger bg-light mx-auto ms-1"
            onClick={handleClose}>
            Close
          </Button>
          <Modal.Title className="mx-auto text-secondary">
            EDIT PRODUCT
          </Modal.Title>
          <Button
            variant="border border-primary text-primary bg-light mx-auto me-1"
            onClick={handleClose}>
            Save
          </Button>
        </Modal.Header>
        <Modal.Body className="backColor border border-secondary">
          <div className="card">
            <img src="" alt="" />
          </div>
          <div className="btnContainer">
            <Button onClick={() => setSort((prev) => !prev)}>
              <span>
                <FaSort />
              </span>
              <span>Sort Sections</span>
            </Button>
            <Button onClick={() => setDel((prev) => !prev)}>
              <span>
                <FaTrash />
              </span>
              <span>Delete Sections</span>
            </Button>
          </div>

          <div className="contentContainer">
            <h2>MENU</h2>
            <ul className="menu">
              {menuItems.map((item) => (
                <li>
                  <span className="item-icon">{item.icon}</span>
                  <span className="item-title">{item.title}</span>
                  <span className="item-sort">
                    {sort && (
                      <>
                        <button onClick={() => moveUp(item.id)}>
                          <FaSortUp />
                        </button>
                        <button onClick={() => moveDown(item.id)}>
                          <FaSortDown />
                        </button>
                      </>
                    )}
                  </span>
                  <span className="item-sort">
                    {del && (
                      <button onClick={() => deleteItem(item.id)}>
                        <FaTrash />
                      </button>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="addSection">
            <Button>
              <FaPlus /> Add New Section
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdminEditMenu;
