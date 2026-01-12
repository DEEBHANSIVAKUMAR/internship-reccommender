const router = require("express").Router();
const axios = require("axios");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, async (req, res) => {
  try {
    const response = await axios.post(process.env.PYTHON_URL, req.body);
    res.json({ results: response.data });
  } catch (err) {
    res.status(500).json({ error: "Python model not responding" });
  }
});

module.exports = router;
