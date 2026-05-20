const isAdmin = (req, res, next) => {
  try {
    if (req.body.role != "admin") {
      res.status(403).json({ message: "Access Denied , Admin only" });
    }
    next();
  } catch (error) {
    res.status(500).json({message:"Internal Server Error"})
  }
};

module.exports = isAdmin;
