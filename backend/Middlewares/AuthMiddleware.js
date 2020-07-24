const jwt = require("jsonwebtoken");

const AuthMiddleware = async (req, res, next) => {
  try {
    const { headers, url } = req || {};
    const { authorization } = headers || {};

    const isNewSession = url === "/login" || url === "/signup";

    if (isNewSession) return next();

    const token = authorization && authorization.split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.APP_SECRET_KEY, (err, user) => {
      if (err) return res.sendStatus(403);

      req.user = user;

      return next();
    });
  } catch (err) {
    return res.status(500).jsn({ message: err });
  }
};

module.exports = AuthMiddleware;
