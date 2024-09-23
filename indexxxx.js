import express from "express";

const app = express();
const port = 5114;

const navContent = `
<nav>
    <a href="/">Home</a>
    <a href="/services">Services</a>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
    <a href="/contact-us">Contact us</a>
</nav>`;
const servicesContent = `
    <nav>
        <a href="/services/html">HTML</a>
        <a href="/services/css">CSS</a>
        <a href="/services/js">JS</a>
        <a href="/services/git">GIT</a>
    </nav>`;

const renderPage = (title, mainContent) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <header>
        ${navContent}
    </header>
    <main>
        ${mainContent}
    </main>
</body>
</html>
`;

app.get("/", (req, res) => {
  res.send(renderPage("Home", "<h1>Home page</h1>"));
});

app.get("/contact-us", (req, res) => {
  res.send(
    renderPage(
      "Contact Us",
      `
    <h1>Contact us page</h1>
    <p>Dabar bulviakasis - netrukdyk 👀</p>
  `
    )
  );
});

app.get("/services", (req, res) => {
  res.send(
    renderPage(
      "Services",
      `
    <h1>Services page</h1>
        ${servicesContent}
  `
    )
  );
});

app.get("/services/:name", (req, res) => {
  const services = {
    html: "HTML yra cool",
    css: "CSS yra grazu",
    js: "JS tiesiog yra",
    git: "Git it",
  };

  const serviceName = req.params.name;
  const serviceDescription = services[serviceName];

  if (serviceDescription) {
    res.send(
      renderPage(
        `${serviceName.toUpperCase()}`,
        `
      <h1>${serviceName.toUpperCase()} page</h1>
      <p>${serviceDescription}</p>
    `
      )
    );
  } else {
    res.send(
      renderPage(
        "Not Found",
        `
      <h1>Service Not Available</h1>
      <p>Paslauga "${serviceName}" nera teikiama</p>
    `
      )
    );
  }
});

app.get("/login", (req, res) => {
  res.send(renderPage("Login", "<h1>Login page</h1>"));
});

app.get("/register", (req, res) => {
  res.send(renderPage("Register", "<h1>Register page</h1>"));
});

app.get("/secret", (req, res) => {
  res.status(401).send(
    renderPage(
      "Unauthorized",
      `
    <h1>Secret page</h1>
    <p>You do not have permission to view this page.</p>
  `
    )
  );
});

app.get("*", (req, res) => {
  res.status(404).send(
    renderPage(
      "404",
      `
    <h1>404</h1>
    <p>Page not found</p>
  `
    )
  );
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Serveris sukasi ant http://localhost:${port}`);
});
