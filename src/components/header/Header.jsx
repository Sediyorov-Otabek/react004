import React, { useState } from "react";
import book from "../../assets/book-removebg-preview.png";
import { VscAccount } from "react-icons/vsc";
import { VscFolderOpened } from "react-icons/vsc";
import { VscCallOutgoing } from "react-icons/vsc";
import "./Header.scss";
const Header = () => {
  const [value, func] = useState();
  const handleClick = () => {};
  return (
    <div className="Header flex items-center flex-col gap-1 container sticky  bg-slate-400">
      <b>BOOK SHOP</b>
      <nav className="navv flex  justify-between items-center ">
        <div className="logo">
          <img src={book} alt="" />
        </div>
        <ul className="nav__collection gap-2 flex items-center">
          <li className="nav__item">
            <a href="">Home</a>
          </li>
          <li className="nav__item">
            <a href="#">About</a>
          </li>
          <li className="nav__item">
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="nav__icons flex items-center gap-2">
          <VscAccount />
          <VscFolderOpened />
          <VscCallOutgoing />
        </div>
      </nav>
    </div>
  );
};

export default Header;
