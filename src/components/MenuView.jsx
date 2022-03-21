import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/MenuView.css";

import AddToCart from "./AddToCart";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Dropdown, Form } from "react-bootstrap";
import { ClassNames } from "@emotion/react";

function Menu(restName, menuItems) {
  let menuCategories = ["Beef", "Pizza", "Sushi", "Wine"];

  menuItems = {}; //Needs to be changed to dynamic
  restName = "ABC";

  menuCategories.map((category) => {
    menuItems[category] = [
      {
        restName: `${restName}`,
        dish: "Cheese Pizza",
        description: "Thick crust with Heavy Cheese cream",
        price: 16,
        allergen: ["celery", "treenut"],
        photo: `/product-pics/pizza.jpg`,
      },
      {
        restName: `${restName}`,
        dish: "Texas Burger",
        description: "Texas Style Smoked Beef Burger",
        price: 12,
        allergen: ["eggs", "soya"],
        photo: `/product-pics/${/*this.dish*/ "burger"}.jpg`,
      },
    ];
  });

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
                  className="color dropdownCategory"
                >
                  {menuItems[item].map((e) => (
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
                              <AddToCart
                                restName={e["restName"]}
                                dish={e["dish"]}
                                price={e["price"]}
                                photo={e["photo"]}
                                description={e["description"]}
                                quantity={1}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dropdown.Item>
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
