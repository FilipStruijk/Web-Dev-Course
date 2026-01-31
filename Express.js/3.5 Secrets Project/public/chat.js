import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const actualPW = "ILoveProgramming";

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/secrets", (req, res) => {
  const enteredPW = req.body.password;

  if (enteredPW === actualPW) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.send("<h1>Wrong password. Try again.</h1>");
    // or: res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});