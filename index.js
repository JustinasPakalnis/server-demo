import express from "express";

const app = express();
const port = 5114;

app.get("/", (req, res) => {
  return res.send("home page");
});
app.get("/login", (req, res) => {
  return res.send("Login page");
});
app.get("*", (req, res) => {
  return res.send("NOT FOUND");
});

app.listen(port, () => {
  console.log(`Serveris sukasi ant http://localhost:${port}`);
});
