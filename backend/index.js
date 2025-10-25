const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Testowy endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Backend działa!" });
});

// Nasłuch na wszystkich interfejsach
app.listen(5000, "0.0.0.0", () => {
  console.log("Backend uruchomiony na porcie 5000");
});
