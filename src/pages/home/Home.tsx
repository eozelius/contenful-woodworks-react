import React from "react";
import { useLoaderData } from "react-router-dom";
import { Products } from "../products";
import { TProduct } from "../../types/product";
import "./Home.css";

export const Home: React.FC = (): JSX.Element => {
  const products = useLoaderData() as TProduct[];

  return (
    <div className="Home">
      <h1>Ozzie's Wood Working</h1>

      <Products products={products} />
    </div>
  );
};
