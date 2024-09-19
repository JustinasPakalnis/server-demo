import express from "express";

const app = express();
const port = 5114;

app.get("/", (req, res) => {
  return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    laba diena cia yr main
</body>
</html>`);
});

app.get("/services", (req, res) => {
  return res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>SERVICES PAGE</h1>
    <nav>
<a href="services/html">HTML</a>
<a href="services/css">CSS</a>
<a href="services/js">JS</a>
<a href="services/git">GIT</a>
    </nav>
</body>
</html>`);
});

app.get("/services/:name", (req, res) => {
  const serviceList = ["html", "css", "js", "git"];

  const services = {
    html: "HTML yra cool",
    css: "CSS yra kietai",
    js: "JS yra ok",
    git: "GIT yr GIT",
  };

  if (services[req.params.name]) {
    return res.send(services[req.params.name]);
  } else {
    return res.send(`Paslauga "${req.params.name}" nera teikiama`);
  }
});

app.get("/login", (req, res) => {
  return res.send("Login page");
});

app.get("/register", (req, res) => {
  return res.send("Register page");
});

app.get("/secret", (req, res) => {
  return res.status(401).send("Secret page");
});

app.get("*", (req, res) => {
  return res.send("404 - page not found");
});

app.use((req, res, next) => {
  return res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Serveris sukasi ant http://localhost:${port}`);
});
