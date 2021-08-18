import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

/**
 * @desc       send mail
 * @param      {object}   req  - request
 * @param      {string}   req.body.to  - email to send
 * @param      {string}   req.body.subject  - subject of the email
 * @param      {string}   req.body.message  - message of the email
 * @route      POST /api/v1/mail/send
 * @access     Public
 * @author     Md Arif Hossain
 * @version    1.0.0
 * @date       2021-08-18
 */
const sendMail = asyncHandler(async (req, res) => {
  const { to, subject, message } = req.body;

  //   configs
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST || "smtp.mailtrap.io",
    port: process.env.MAIL_PORT || 2525,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  //   send mail
  let errorCount = 0;
  to.forEach(async (email) => {
    const mailOptions = {
      from: process.env.MAIL_FROM || "hi@devarif.me",
      to: email,
      subject,
      text: message,
    };
    await transport.sendMail(mailOptions, (err) => {
      if (err) {
        errorCount++;
      }
    });
  });

  //   response send
  if (errorCount === 0) {
    res.status(200).send({
      status: true,
      message: "Mail sent successfully",
    });
  } else {
    res.status(500).send({
      status: false,
      message: "Error while sending mail",
    });
  }
});

export { sendMail };
