// import React from "react";
// import { useState } from "react";
// import { Data } from "./productData";
// import { Card, Button } from "react-bootstrap";

// const Product = () => {
//   const [items, setItems] = useState(Data);

//   const changeLike = (id) => {
//     {
//       const likes = items.map((item) =>
//         item.id === id ? { ...item, likes: item.likes + 1 } : item
//       );
//       setItems(likes);
//     }
//   };

//   return (
//     <>
//       <h1 className="bg-info text-white">Products</h1>
//       {items.map((item) => (
//         <div className="d-inline-flex">
//           <Card
//             className="shadow p-3 m-2 bg-body rounded"
//             style={{ width: "13rem" }}
//           >
//             <Card.Img className="" variant="top" src={item.image} />
//             <Card.Body>
//               <Card.Title>{item.name}</Card.Title>
//               <Card.Text>{item.desc}</Card.Text>
//               <Button onClick={() => changeLike(item.id)} variant="primary">
//                 Likes : {item.likes}
//               </Button>
//             </Card.Body>
//           </Card>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Product;
