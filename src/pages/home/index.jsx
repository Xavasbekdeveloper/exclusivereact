import React, { memo } from "react";
import Hero from "../../components/hero";
import Products from "../../components/products";
import Service from "../../components/service";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Service />
    </>
  );
};

export default memo(Home);
