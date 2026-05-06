// import { useState } from "react";

const ProductCard = (props) => {
//   let [cart, setCart] = useState(0);

  return (
    <>
      <div id="product-container">
        <img src={props.details.imageSrc} alt="" />
        <p>
          <h4>Name: {props.details.name}</h4>
          <h4>Price: {props.details.price}</h4>
          <h4>Description: {props.details.description}</h4>
          <h4>Ratings: {props.details.ratings}</h4>
          <button>Add cart</button>
        </p>
      </div>
    </>
  );
};

export default ProductCard;
