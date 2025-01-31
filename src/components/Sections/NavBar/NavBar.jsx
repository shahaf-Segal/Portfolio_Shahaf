import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={Styles["NavBar"]}>
      <Link to="#home">Home</Link>
      <Link to="#about">About</Link>
      <Link to="#projects">Projects</Link>
    </div>
  );
};

export default NavBar;
