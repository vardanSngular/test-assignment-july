const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.use("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    const storedUserJson = fs.readFileSync("./db/User.json");
    const storedUser = JSON.parse(storedUserJson);

    if (!storedUser.username || storedUser.username !== username) {
      return res.status(400).json({ message: "User not found!" });
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      storedUser.password
    );

    if (!isCorrectPassword) {
      return res.status(401).json({ message: "The password is not correct!" });
    }

    const token = jwt.sign(storedUser, process.env.APP_SECRET_KEY);

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

module.exports = router;
