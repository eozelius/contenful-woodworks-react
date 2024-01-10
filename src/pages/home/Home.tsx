import React from 'react';
import { useLoaderData } from "react-router-dom";

import './Home.css';
import { Products } from '../products';

export const Home: React.FC = (): JSX.Element => {
  // @ts-ignore
  const products: any[] = useLoaderData();

  return (
    <div className="Home">
      <h1>Ozzie's Wood Working</h1>

      <Products products={products} />


    </div>
  );
}

