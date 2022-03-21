import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaSortUp, FaSortDown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../admin/style-sheets/AdminMenuView.css";

import AddToCart from "../AddToCart";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button, Dropdown, Form } from "react-bootstrap";
import { ClassNames } from "@emotion/react";

function Menu(restName) {
  const [displayBtn, setDisplayBtn] = useState(false);
  const [sort, setSort] = useState(false);
  let menuCategories = ["Beef", "Pizza", "Sushi", "Wine"];

  // menuItems = {}; //Needs to be changed to dynamic
  restName = "ABC";
  let temp2 = {};

  menuCategories.map((category) => {
    temp2[category] = [
      {
        id: 1,
        restName: `${restName}`,
        dish: "1",
        description: "Thick crust with Heavy Cheese cream",
        price: 16,
        allergen: ["celery", "treenut"],
        photo: `/product-pics/pizza.jpg`,
        isVisible: true,
      },
      {
        id: 2,
        restName: `${restName}`,
        dish: "2",
        description: "Texas Style Smoked Beef Burger",
        price: 12,
        allergen: ["eggs", "soya"],
        photo: `/product-pics/${/*this.dish*/ "burger"}.jpg`,
        isVisible: true,
      },
      {
        id: 3,
        restName: `${restName}`,
        dish: "3",
        description: "Texas Style Smoked Beef Burger",
        price: 12,
        allergen: ["eggs", "soya"],
        photo: `/product-pics/${/*this.dish*/ "burger"}.jpg`,
        isVisible: true,
      },
      {
        id: 4,
        restName: `${restName}`,
        dish: "4",
        description: "Texas Style Smoked Beef Burger",
        price: 12,
        allergen: ["eggs", "soya"],
        photo: `/product-pics/${/*this.dish*/ "burger"}.jpg`,
        isVisible: true,
      },
    ];
  });

  const [menuItems, setMenuItems] = useState(temp2);

  const toggleItemsVisibility = (id, item) => {
    const list = [...menuItems[item]].map((it) =>
      it.id === id ? { ...it, isVisible: !it.isVisible } : it
    );
    const arr = Object.entries(menuItems).map(([key, value]) =>
      key === item ? [key, list] : [key, value]
    );
    const obj = arr.reduce((acc, curr) => {
      acc[curr[0]] = curr[1];
      return acc;
    }, {});
    setMenuItems(obj);
  };

  const moveUp = (id, item) => {
    const list = [...menuItems[item]];
    const currPos = list.findIndex((item) => item.id === id);
    const newPos = currPos === 0 ? list.length - 1 : currPos - 1;
    [list[currPos], list[newPos]] = [list[newPos], list[currPos]];
    const arr = Object.entries(menuItems).map(([key, value]) =>
      key === item ? [key, list] : [key, value]
    );
    const obj = arr.reduce((acc, curr) => {
      acc[curr[0]] = curr[1];
      return acc;
    }, {});
    setMenuItems(obj);
  };
  const moveDown = (id, item) => {
    const list = [...menuItems[item]];
    const currPos = list.findIndex((item) => item.id === id);
    const newPos = currPos === list.length - 1 ? 0 : currPos + 1;
    [list[currPos], list[newPos]] = [list[newPos], list[currPos]];
    const arr = Object.entries(menuItems).map(([key, value]) =>
      key === item ? [key, list] : [key, value]
    );
    const obj = arr.reduce((acc, curr) => {
      acc[curr[0]] = curr[1];
      return acc;
    }, {});
    setMenuItems(obj);
  };

  return (
    <div className="container-fluid">
      <div className="row m-5" id="wifi">
        <div className="container-fluid text-center">
          <div className="wifiLine"></div>
          <span className="badge rounded-pill wifiBadge">Menu</span>
        </div>
      </div>

      <div id="menuDropdown">
        {menuCategories.map((item) => (
          <div className="row mx-auto m-2">
            <div>
              {
                <DropdownButton
                  key={item}
                  id={`dropdown-variants-Success ${item}`}
                  variant=" text-light"
                  title={
                    <div className="container justify-content-start">
                      <img
                        src={
                          "/icons/food-icons/food-icons/food/" +
                          item.toLowerCase() +
                          ".svg"
                        }
                        className="m-1 ms-2 me-3"
                        width={"35px"}
                      />
                      {item}
                    </div>
                  }
                  className="color dropdownCategory">
                  <div className="menuBtn">
                    <Button
                      className="ShowHide"
                      onClick={() => {
                        setDisplayBtn((prev) => !prev);
                      }}>
                      {displayBtn ? "Hide" : "Show"}
                    </Button>
                    <Button
                      className="Sort"
                      onClick={() => setSort((prev) => !prev)}>
                      Sort Products
                    </Button>
                  </div>
                  {(!displayBtn
                    ? menuItems[item].filter((it) => it.isVisible)
                    : menuItems[item]
                  ).map((e) => (
                    <>
                      <div className="btnContain">
                        {displayBtn && (
                          <Button
                            onClick={() => {
                              toggleItemsVisibility(e.id, item);
                            }}>
                            {e.isVisible ? <FaAngleDown /> : <FaAngleUp />}
                          </Button>
                        )}
                        {sort && (
                          <>
                            <Button onClick={() => moveUp(e.id, item)}>
                              <FaSortUp />
                            </Button>
                            <Button onClick={() => moveDown(e.id, item)}>
                              <FaSortDown />
                            </Button>
                          </>
                        )}
                      </div>
                      <Dropdown.Item eventKey="1" className="dropItem">
                        <div className="container-fluid">
                          <div className="card mt-2">
                            <img
                              src={e["photo"]}
                              alt={e["dish"]}
                              className="card-img-top productImg"
                            />
                            <div className="card-body">
                              <h5 className="card-title">{e["dish"]}</h5>

                              <p className="card-text productDescription">
                                <strong>
                                  Product Description ---------------
                                </strong>
                                <br />
                                {e["description"]}
                              </p>

                              <p className="card-text">
                                {e["allergen"].map((allergy) => {
                                  return (
                                    <img
                                      src={`/icons/allergen-icons/allergens-yellow/${allergy}.svg`}
                                      alt={allergy}
                                      className="m-1"
                                      width={"10%"}
                                    />
                                  );
                                })}
                              </p>

                              <div className="card-text">
                                Price ------------------- $
                                {parseFloat(e["price"]).toFixed(2)}
                                {/* <AddToCart
                                  restName={e["restName"]}
                                  dish={e["dish"]}
                                  price={e["price"]}
                                  photo={e["photo"]}
                                  description={e["description"]}
                                  quantity={1}
                                /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Dropdown.Item>
                    </>
                  ))}
                </DropdownButton>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
