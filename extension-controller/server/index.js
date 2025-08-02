const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const commands = {}; // lưu lệnh theo client_id

app.get("/api/command/:client_id", (req, res) => {
  const client_id = req.params.client_id;
  res.json(commands[client_id] || { command: "idle" });
});

app.post("/api/command", (req, res) => {
  const { client_id, command, config } = req.body;
  commands[client_id] = { command, config };
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
