import React, { useState } from "react";
import { SideBar } from "./SideBar";
import "./NavBar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const menuList = SideBar.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <a href="">{title}</a>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div>
      <nav>
        <div className="logo">Zang</div>

        <div className="menu-icon" onClick={handleClick}>
          {clicked ? (
            <div className="menu-head">
              {" "}
              <span className="menu">MENU</span>
              <AiIcons.AiOutlineClose className="fas" />
            </div>
          ) : (
            <FaIcons.FaBars className="fas" />
          )}
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
          {menuList}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
