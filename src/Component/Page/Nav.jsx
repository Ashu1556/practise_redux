import React from "react";
import "./nav.css";

import { Authorization } from "../Context_api/context";
import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const { setIsLoggedIn, state } = useContext(Authorization);

  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar">
        <div className="navbar1">
          <h2>Ecommerce Website</h2>
        </div>
        <div className="navbar2">
          <Link to="/home">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link>

          <button
            className="btn4"
            onClick={() => {
              setIsLoggedIn(false);
              navigate("/");
            }}
          >
            Log Out
          </button>
          {state}
        </div>
      </div>
    </div>
  );
};

export default Nav;
