import React, { memo, useEffect, useState } from "react";
import "./products.scss";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import axios from "../../api";

const Products = () => {
  const [data, setData] = useState(null);
  const [offset, setOffset] = useState(1);
  const perPageCount = 8;

  useEffect(() => {
    axios
      .get(`/products`, {
        params: {
          limit: offset * perPageCount,
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [offset]);

  let products = data?.map((product) => (
    <div className="products__card">
      <div className="products__card__img">
        <img src={product.image} alt={product.title} />
        <button className="products__card__add-btn">Add To Card</button>
      </div>
      <div className="products__card__info">
        <h3 className="products__card__title">{product.title}</h3>
        <p className="products__card__text">{product.price}</p>
      </div>
      <div className="products__card__btns">
        <button>
          <IoMdHeartEmpty />
        </button>
        <button>
          <FaRegEye />
        </button>
      </div>
    </div>
  ));

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">Our Products</h2>

        <div className="products__cards">{products}</div>
        <div className="products__more__btns">
          <button
            onClick={() => setOffset((p) => p + 1)}
            className="products__more__btn"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(Products);
