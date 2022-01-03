const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  !accessToken && res.json({ error: "User not logged in!" });
  try {
    const validToken = verify(accessToken, "importantsecret");
    req.user = validToken;
    validToken && next();
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };
