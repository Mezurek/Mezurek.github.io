import React from "react";
import { ListItems } from "../../../assets/Subcategories";
import { Link } from "react-router-dom";

const Subcats = () => (
  <div className="subcats">
    <h4>Subcategories:</h4>
    <ul className="subcategories">
      <li className="categories">
        <ul>
          {ListItems.map((ListItem, index) => (
            <li key={index}>
              <Link to={ListItem.slug}>{ListItem.category}</Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  </div>
);

export default Subcats;
