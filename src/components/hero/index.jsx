import React, { memo } from "react";
import "./hero.scss";
import heroBg from "../../assets/images/hero-background.png";
import heroImg from "../../assets/images/hero-img.png";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__left">
          <img className="hero__left-img" src={heroImg} alt="img" />
          <h1 className="hero__title">
            Up to 10% <br /> off Voucher
          </h1>
          <button className="hero__btn">
            Shop Now <FaArrowRight />
          </button>
        </div>
        <div className="hero__right">
          <img src={heroBg} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
