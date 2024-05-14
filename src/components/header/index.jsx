import React, { memo, useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  const [showList, setShowList] = useState(false);
  return (
    <>
      <div className="top">
        <div className="container top__container">
          <div className="top-text-box">
            <p className="top-text">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
              <span>ShopNow</span>
            </p>
          </div>
          <select className="top-select" name="" id="">
            <option value="english">English</option>
            <option value="russian">Russian</option>
            <option value="uzbek">Uzbek</option>
          </select>
        </div>
      </div>
      <header className="header">
        <nav className="nav">
          <div className="container header__container">
            <div className="header__logo">
              <NavLink to={"/"}>
                <img src={logo} alt="img" />
              </NavLink>
            </div>
            <ul
              className={
                showList ? "header__list header__show-list" : "header__list"
              }
            >
              <li className="header__item">
                <NavLink className="header__link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__link" to={"/contact"}>
                  Contact
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__link" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink className="header__link" to={"/login"}>
                  Sign in
                </NavLink>
              </li>
              <li className="header__close-item">
                <button onClick={() => setShowList(false)}>
                  <IoClose />
                </button>
              </li>
            </ul>
            <div className="header__btns">
              <div className="header__search">
                <input type="text" placeholder="What are you looking for?" />
                <button>
                  <CiSearch />
                </button>
              </div>
              <button>
                <GoHeart />
              </button>
              <button>
                <IoCartOutline />
              </button>
              <button
                onClick={() => setShowList(true)}
                className="header__bar-btn"
              >
                <FaBarsStaggered />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default memo(Header);
