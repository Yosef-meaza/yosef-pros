const { log } = require('async');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "josephmeaza1@gmail.com",
      pass: "200gatesfordavil"
   }
});
let mailOption = {
   from: "Yosef Meaza",
   to: "josephmeaza2@gmail.com, meazaabay9@gmail.com",
   subject: "about practice of node",
   text: "Hello world"
}
transporter.sendMail(mailOption, function(err, info) {
   if (err) {
      console.error(err)
   } else {
      log(info.response);
   }
})