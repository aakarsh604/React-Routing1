import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setproduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/Products/${id}`)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setproduct(res);
        });
    }
  }, [id]);

  return (
    <div style={{fontSize:"35px", fontWeight:"bold", marginTop: "150px"}}>
      <div>{product.name}</div>
      <div>{`${product.price}/-`}</div>
    </div>
  );
};

export default Product;
