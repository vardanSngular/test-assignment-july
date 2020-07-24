const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.use("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = JSON.stringify({
      username,
      password: hashedPassword,
    });

    fs.writeFileSync("./db/User.json", newUser);

    const user = { username };

    const token = jwt.sign(user, process.env.APP_SECRET_KEY);

    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

module.exports = router;
