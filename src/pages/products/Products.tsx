import React from "react";
import Contentful from "../../api/Contentful";
import { Link } from "react-router-dom";
import { TProduct } from "../../types/product";
import "./styles.css";

type TProps = {
  products: TProduct[];
};

export const Products: React.FC<TProps> = ({ products }): JSX.Element => {
  // console.log(`[ <Products> ] render() products => `, products);

  return (
    <div id="multiple_products">
      <h1>All Products</h1>

      {products &&
        products.length &&
        products.map((product: any, idx: number) => (
          <div className="products-list-container" key={idx}>
            {/* Title */}
            <h3>{product.fields.title}</h3>

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

            {/* Dropbox */}
            <div className="dropbox-container">
              {product.fields.dropbox &&
                product.fields.dropbox.length &&
                product.fields.dropbox.map((dropbox: any, hdx: number) => {
                  // const imageSrc = dropbox.link.replace('dl=0', 'raw=1')
                  return (
                    <img
                      src={dropbox.link.replace('dl=0', 'raw=1')}
                      alt={dropbox.name}
                      key={hdx}
                    />
                  )
                })}
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
