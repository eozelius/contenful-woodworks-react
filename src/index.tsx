import React from 'react';
import ReactDOM from 'react-dom/client';
import Contentful from './api/Contentful';
import { Home } from './pages/home';
import { CraftsPerson } from './pages/craftsPerson';
// import { Products, Product } from './pages/products';
// import { Products } from './pages/products';
import reportWebVitals from './reportWebVitals';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

const contentfulApi = new Contentful();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      const products = await contentfulApi.retrieveWWProducts();
      return products;
    }
  },
  {
    path: '/crafts-people/:craftsPersonId',
    element: <CraftsPerson />,
    loader: async (request) => {
      const craftsPerson = await contentfulApi.retrieveCraftsPerson(request.params.craftsPersonId as string);
      return craftsPerson[0];
    }
  }
  // {
  //   path: '/products',
  //   children: [
  //     {
  //       path: '/products/all',
  //       element: <Products />,
  //       // loader: async ({ request }) => {
  //       //   const products = await contentfulApi.retrieveWWProducts();
  //       //   console.log(`[ index ] /products/all() request => `, request)
  //       //   console.log(`[ index ] /products/all() products => `, JSON.stringify(products,null,4))
  //       // }
  //     },
  //     // {
  //     //   path: '/:productId',
  //     //   element: <Product />
  //     // }
  //   ]
  // },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
