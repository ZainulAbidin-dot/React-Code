import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/AdminEditWifi.css";
import "./style-sheets/AdminEditMenu.scss";

import styles from './style-sheets/edit-menu-popup.module.css';

import {
  FaPlus,
  FaSort,
  FaSortDown,
  FaSortUp,
  FaTrash,
  FaTimes
} from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";

function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
  images = Object.entries(images).map(([key, value], index) => [key, { img: value, id: index }])
  return Object.fromEntries(images);
}

const images = { ...importAll(require.context(`/public/icons/food-icons/food-icons/food`, false, /\.(png|jpe?g|svg)$/)), ...importAll(require.context(`/public/icons/food-icons/food-icons/beverage`, false, /\.(png|jpe?g|svg)$/)) };

function AdminEditMenu() {
  const [show, setShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false)
  const [selectedItem, setSelectdItem] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [menuItems, setMenuItems] = useState([
    { id: 1, title: "SUSHI", icon: images['sushi-1.svg'].img },
    { id: 2, title: "HAMBURGER", icon: images['french-fries.svg'].img },
    { id: 3, title: "SECTION", icon: images['french-fries.svg'].img },
    { id: 4, title: "WINE LIST", icon: images['french-fries.svg'].img },
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

  const handleIconClick = (id) => {
    setShowPopup(prev => !prev);
    setSelectdItem(id);
  }

  const updateIcon = (imgLink) => {
    const confirmUpdate = window.confirm('Are you sure..?');
    if (!confirmUpdate) return
    setMenuItems(menuItems.map(item => item.id === selectedItem ? { ...item, icon: imgLink } : item));
    closePopup()
  }

  const closePopup = () => {
    setShowPopup(prev => !prev);
    setSelectdItem(null);
  }

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


      {showPopup &&
        <section className={styles.popupContainer}>
          <article className={styles.popup}>
            <FaTimes
              className={styles.closeBtn}
              role="button"
              aria-label="close popup"
              title="close popup"
              onClick={closePopup}
            />
            <ul className={styles.images}>
              {Object.entries(images).map((img, index) => (
                <li
                  className={styles.image}
                  key={index}
                  role="button"
                  onClick={() => updateIcon(img[1].img)}
                >
                  <img src={img[1].img} alt={img[0]} />
                </li>
              ))}
            </ul>
          </article>
        </section>
      }

      <div className="btnContainer">
        <Button onClick={() => setSort((prev) => !prev)}>
          <FaSort />
          <span>Sort Sections</span>
        </Button>
        <Button onClick={() => setDel((prev) => !prev)}>
          <FaTrash />
          <span>Delete Sections</span>
        </Button>
      </div>

      <div className="contentContainer">
        <h2>MENU</h2>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <span
                className="item-icon"
                role="button"
                aria-label="click here to change icon"
                title="click here to change icon"
                onClick={() => handleIconClick(item.id)}
              >
                <img src={item.icon} alt={item.title} />
              </span>
              <span className="item-title">{item.title}</span>
              <span className="item-sort">
                {sort && (
                  <>
                    <FaSortUp
                      role="button"
                      aria-label="Swap position with item above"
                      title="Swap position with item above"
                      onClick={() => moveUp(item.id)}
                    />
                    <FaSortDown
                      role="button"
                      aria-label="Swap position with item below"
                      title="Swap position with item below"
                      onClick={() => moveDown(item.id)}
                    />
                  </>
                )}
              </span>
              <span className="item-sort">
                {del && (
                  <FaTrash
                    role="button"
                    aria-label="Delete this item"
                    title="Delete this item"
                    onClick={() => deleteItem(item.id)}
                  />
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
              {menuItems.map((item, index) => (
                <li key={index}>
                  <span
                    className="item-icon"
                    role="button"
                    aria-label="click here to change icon"
                    title="click here to change icon"
                    onClick={() => handleIconClick(item.id)}
                  >
                    <img src={item.icon} alt={item.title} />
                  </span>
                  <span className="item-title">{item.title}</span>
                  <span className="item-sort">
                    {sort && (
                      <>
                        <FaSortUp
                          role="button"
                          aria-label="Swap position with item above"
                          title="Swap position with item above"
                          onClick={() => moveUp(item.id)}
                        />
                        <FaSortDown
                          role="button"
                          aria-label="Swap position with item below"
                          title="Swap position with item below"
                          onClick={() => moveDown(item.id)}
                        />
                      </>
                    )}
                  </span>
                  <span className="item-sort">
                    {del && (
                      <FaTrash
                        role="button"
                        aria-label="Delete this item"
                        title="Delete this item"
                        onClick={() => deleteItem(item.id)}
                      />
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
