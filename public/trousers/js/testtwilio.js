var twilio = require("twilio");

var accountSid = "AC785ae236631f424fd985e04237209a5e"; // Your Account SID from www.twilio.com/console
var authToken = "56c7e2d73402487b3474f0551754e228"; // Your Auth Token from www.twilio.com/console

var twilio = require("twilio");
var client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: "Hello from Node",
    to: "+250788722622", // Text this number
    from: "+14155238886", // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
