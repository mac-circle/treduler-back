import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.TREDULER_GMAIL || "",
    pass: process.env.TREDULER_PASSWORD || ""
  }
});

export const mailOptions = (to, subject, text, html) => {
  const option = {
    from: process.env.TREDULER_GMAIL,
    to,
    subject,
    text,
    html
  };
  return option;
};
