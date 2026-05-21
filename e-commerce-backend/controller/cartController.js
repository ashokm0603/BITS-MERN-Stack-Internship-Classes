const CartProducts = require("../model/CartModel");

//addToCart
const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    if (!userId || !productId) {
      res.status(401).json({ message: "missing required fields" });
    }

    if (await CartProducts.findOne({ userId: userId }) == null) {
      await CartProducts.insertOne({ userId: userId, productIds: [productId] });
    } else {
      await CartProducts.updateOne(
        { userId: userId },
        { $push: { productIds: productId } },
      );
    }
    res.status(200).json({ message: "add to cart successful" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add cart ", error });
  }
};

//get Cart Products
// remove Cart Product based on ID
// remove All Cart Products

module.exports = { addToCart };
