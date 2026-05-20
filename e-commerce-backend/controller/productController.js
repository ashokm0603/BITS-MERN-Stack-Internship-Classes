const Products = require("../model/ProductModel");

// add product
const addProducts = async (req, res) => {
  try {
    const newProduct = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      ratings: req.body.ratings,
      imageSrc: req.body.imageSrc,
      about: req.body.about,
      reviews: req.body.reviews,
    };
    await Products.insertOne(newProduct);
    res.status(201).json({ message: "Product Added" });
  } catch (err) {
    res.status(500).json({ message: "Failed add Product" });
  }
};

//edit productDetails
//delete products
//get product based on ID
//get all products

//filter products based on price
//sort products based on price
module.exports=addProducts;