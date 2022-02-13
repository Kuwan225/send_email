const nodemailer = require("nodemailer");

const sendmail = async () => {
  const coba = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false,
    auth: {
      user: "postmaster@sandbox0a6b7ca8c4564592b38795eb838c5339.mailgun.org",
      pass: "77c89c10a5da8cd7d248804c530b0dea-c250c684-d3c5323b",
    },
  });
  let info = await coba.sendMail({
    from: '"Kuwan" <noreply@kuwan.com>',
    to: "marwanmaulana57@gmail.com",
    subject: "Depkoleptor ✔",
    // text: "Hello world?", // plain text body
    html: "<p>Hello Kuwan Hutang kamu berapa?</p>",
  });
  console.log("Message sent: %s", info.messageId);
};

module.exports = sendmail;
