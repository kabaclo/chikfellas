const requestModal = document.querySelector(".new-request");
const buttons = document.querySelectorAll(".btn-order");
const imgOrder = document.querySelector(".img-order img");
const btnWhatsapp = document.getElementById("send-whatsapp");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    requestModal.classList.add("open");
    const parentDiv = e.target.parentNode.parentNode;
    const myImg = parentDiv.querySelector("img");
    imgOrder.src = myImg.src;
  });
});

requestModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("new-request")) {
    requestModal.classList.remove("open");
  }
});

const accountSid = "AC785ae236631f424fd985e04237209a5e";
const authToken = "56c7e2d73402487b3474f0551754e228";
const client = require("twilio")(accountSid, authToken);

btnWhatsapp.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked!");

  const phone = "+250788722622";

  client.messages
    .create({
      from: "whatsapp:+14155238886",
      to: "whatsapp:+250788722622",
      body: `Hey sweetheart my phone nume is is ${phone}`,
    })
    .then((message) => console.log(message.sid));
});

// shopbtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("clicked");
//     requestModal.classList.add("open");
//   });
// });
