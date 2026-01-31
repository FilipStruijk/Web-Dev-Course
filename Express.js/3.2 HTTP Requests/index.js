import express from "express";
const app = express()
const port = 3001;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
    //console.log(req.rawHeaders);
});

app.get("/contact", (req, res) => {
    res.send("<h1>Phone No: 12345678</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
    res.send("<p>My name Jeff</p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



