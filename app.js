const express = require("express");

const app = express();
app.listen(8080);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/gallery.html", (req, res) => {
  res.redirect("/gallery");
});

app.get("/index.html", (req, res) => {
  res.redirect("/");
});

app.get("/contact.html", (req, res) => {
  res.redirect("/contact");
});

app.get("/trousers", (req, res) => {
  res.render("./trousers/trousers");
});

app.get("/trousers/trousers.html", (req, res) => {
  res.redirect("/trousers");
});

app.get("/trousers/index.html", (req, res) => {
  res.redirect("/");
});

app.get("/trousers/contact.html", (req, res) => {
  res.redirect("/contact");
});

app.get("/trousers/gallery.html", (req, res) => {
  res.redirect("/gallery");
});

// shirts & t-shirts

app.get("/shirts", (req, res) => {
  res.render("./shirts/shirts");
});

app.get("/shirts/shirts.html", (req, res) => {
  res.redirect("/shirts");
});

app.get("/shirts/index.html", (req, res) => {
  res.redirect("/");
});

app.get("/shirts/contact.html", (req, res) => {
  res.redirect("/contact");
});

app.get("/shirts/gallery.html", (req, res) => {
  res.redirect("/gallery");
});

// End shirts & t-shirts

// send a whatsapp order message

app.post("/whatsapp-order", (req, res) => {
  const accountSid = "AC785ae236631f424fd985e04237209a5e";
  const authToken = "56c7e2d73402487b3474f0551754e228";

  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      mediaUrl: [
        "https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
      ],
      from: "whatsapp:+14155238886",
      body: `Hey my name is ${req.body.orderNames}! You can call me on ${req.body.orderPhoneN} , Here is my location ${req.body.orderLocation}, '\n' customer message: ${req.body.orderMessage}`,
      to: "whatsapp:+250788722622",
    })
    .then((message) => {
      console.log(message.sid);
      res.redirect("/trousers");
    });
});
