import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

type TProps = {
  products: any[];
};

export const Products: React.FC<TProps> = ({ products }): JSX.Element => {
  console.log(`[ <Products> ] render() products => `, products);

  return (
    <div id="multiple_products">
      <h1>All Products</h1>

      {products &&
        products.length &&
        products.map((product: any, idx: number) => (
          <div className="products-list-container">
            {/* Title */}
            <h3 key={idx}>{product.fields.title}</h3>

            {/* Description */}
            {product.fields.description.content &&
              product.fields.description.content.map((c: any, cdx: number) => {
                return (
                  <div className="description-container" key={cdx}>
                    {c &&
                      c.content &&
                      c.content.length &&
                      c.content.map((p: any, pdx: number) => (
                        <p key={pdx}>{p.value}</p>
                      ))}
                  </div>
                );
              })}

            {/* Images */}
            <div className="images-container">
              {product.fields.photos &&
                product.fields.photos.length &&
                product.fields.photos.map((photo: any, jdx: number) => (
                  <img
                    src={photo.fields.file.url}
                    alt={photo.fields.title}
                    key={jdx}
                  />
                ))}
            </div>

            {/* CraftsPerson */}
            <div className="crafts-person-container">
              {/* crafts person name */}
              <Link
                to={`/crafts-people/${product.fields.craftsperson.fields.id}`}
              >
                <h4>{product.fields.craftsperson.fields.name}</h4>
              </Link>

              {/* crafts person profile picture*/}
              <img
                src={
                  product.fields.craftsperson.fields.profilePhoto.fields.file
                    .url
                }
                alt={`Craft person ${product.fields.craftsperson.fields.name}'s profile`}
              />
            </div>
          </div>
        ))}
    </div>
  );
};
