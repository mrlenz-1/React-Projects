import { Button } from "react-bootstrap";
import React, { useState } from "react";

const products = [
  { id: 1, name: "Mobile", brand: "Xiaomi", qty: 1 },
  { id: 2, name: "Mobile", brand: "Apple", qty: 1 },
  { id: 3, name: "Mobile", brand: "Samsung", qty: 1 },
  { id: 4, name: "Mobile", brand: "Vivo", qty: 1 },
];

const Learn = () => {
  const [items, setItem] = useState(products);

  const changeQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItem(newItem);
  };

  return (
    <div className="App">
      {items.map((product) => (
        <div className="bg-warning m-2" key={product.id}>
          <br />
          <h1>{product.name}</h1>
          <h3>Brand: {product.brand}</h3>
          <h4>Quantity: {product.qty}</h4>
          <Button onClick={() => changeQty(product.id)} className="bg-success">
            +
          </Button>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Learn;
