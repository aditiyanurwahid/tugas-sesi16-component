import { useState } from "react";
import ProductItem from "./ProductItem";
import { Container } from "react-bootstrap";

function ListProduct() {
  const [product] = useState([
    {
      name: "Avanza",
    },
    {
      name: "Xenia",
    },
    {
      name: "Ertiga",
    },
  ]);
  return (
    <>
      <Container className="Produk">
        <h3>List Produk</h3>
        {product.map((item) => (
          <ul>
            <ProductItem product={item.name} />
          </ul>
        ))}
      </Container>
    </>
  );
}

export default ListProduct;
