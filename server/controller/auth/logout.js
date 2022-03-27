module.exports = (req, res) => {
  // 로그아웃 로직입니다.
  return res.status(205).send({ message: "Logged out successfully" });
};
