const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({ secret: "secret", saveUninitialized: true, resave: true }));

app.get("/", (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++;
    res.send(`You visited this page ${req.session.page_views} times`);
  } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time!");
  }
});

const PORT = 5000;
app.listen(PORT);
