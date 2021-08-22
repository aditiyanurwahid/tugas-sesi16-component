import { useState } from "react";
import ProductItem from "./ProductItem";

function ListProduct() {
  const [product] = useState(["Toyota", "Mercedes", "BMW", "Daihatsu"]);
  return (
    <>
      {product.map((item, index) => (
        <ProductItem index={index} product={item} />
      ))}
    </>
  );
}

export default ListProduct;
