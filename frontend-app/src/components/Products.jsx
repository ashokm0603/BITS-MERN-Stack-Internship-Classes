import ProductCard from "./ProductCard";
import Nav from "./Nav";
const Products = () => {
  let products = [
    {
      name: "mobile",
      price: 50000,
      description: "good condition",
      ratings: "⭐⭐⭐",
      imageSrc:
        "https://thumbs.dreamstime.com/b/brand-new-realistic-mobile-phone-black-smartphone-apple-iphone-vector-eps-100341904.jpg",
    },
    {
      name: "laptop",
      price: 75000,
      description: "good condition",
      ratings: "⭐⭐⭐⭐",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD0fOhLEvAaj3BmTLvotBCmTql2kVl0l3Yhg&s",
    },
    {
      name: "cloths",
      price: 5000,
      description: "good condition",
      ratings: "⭐⭐⭐⭐",
      imageSrc:
        "https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <>
      <Nav />
      <div id="main-container">
        {products.map((product) => (
          <div>
            <ProductCard details={product} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;
