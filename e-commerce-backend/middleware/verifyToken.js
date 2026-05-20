const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  try {
    const Authentication = req.headers["Authentication"];
    const token = Authentication.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRETE_KEY);
    req.body=decoded;
    next();
  } catch (err) {
    if (err instanceof JsonWebTokenError) {
      res.status(401).json({ message: "invalid token" });
    }
    if (err instanceof TokenExpiredError) {
      res.status(401).json({ message: "Token Expired" });
    }
    if (err instanceof NotBeforeError) {
      res.status(401).json({ message: "Token still not active" });
    }
  }
};
module.exports = verifyToken;
