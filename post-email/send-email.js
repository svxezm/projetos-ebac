import nodemailer from "nodemailer";
import fs from "fs";

try {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "igorb.kuhl@gmail.com",
      pass: "aaaa aaaa aaaa aaaa" // senha aleatória gerada em https://myaccount.google.com/apppasswords
    }
  });

  console.log("Reading file...");
  const emailContent = fs.readFileSync("email.html", "utf8");

  console.log("Sending e-mail...");
  await transporter.sendMail({
    from: "Course Test <igorborges.kuhl@gmail.com>",
    to: "igorb.kuhl@gmail.com",
    subject: "Teste Email HTML",
    html: emailContent
  });
  console.log("Email sent!");
} catch (e) {
  console.error("Failed to send email:", e);
}
