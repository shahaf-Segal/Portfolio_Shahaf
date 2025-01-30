import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={Styles.navBar}>
      <Link to="#About">About</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
};

export default NavBar;
