import React from "react";
import "./service.scss";
import service1 from "../../assets/icons/service1.svg";
import service2 from "../../assets/icons/service2.svg";
import service3 from "../../assets/icons/service3.svg";

const Service = () => {
  return (
    <section className="service">
      <div className="container service__container">
        <div className="service__card">
          <img src={service1} alt="img" />
          <h3 className="service__card__title">FREE AND FAST DELIVERY</h3>
          <p className="service__card__text">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="service__card">
          <img src={service2} alt="img" />
          <h3 className="service__card__title">24/7 CUSTOMER SERVICE</h3>
          <p className="service__card__text">Friendly 24/7 customer support</p>
        </div>
        <div className="service__card">
          <img src={service3} alt="img" />
          <h3 className="service__card__title">MONEY BACK GUARANTEE</h3>
          <p className="service__card__text">We reurn money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default Service;
