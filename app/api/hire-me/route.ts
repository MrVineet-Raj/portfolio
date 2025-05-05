import {
  generateCustomerHTML,
  generatePersonalMailHTML,
} from "@/lib/mail/html-mail";
import Mailgen from "mailgen";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_TRAP_HOST as string,
  port: Number(process.env.MAIL_TRAP_PORT), // Convert port to number
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.MAIL_TRAP_USERNAME,
    pass: process.env.MAIL_TRAP_PASSWORD,
  },
});

async function transferMail(
  senderMail: string,
  email: string,
  mailBody: string,
  subject: string
) {
  try {
    await transporter.sendMail({
      from: `"Unknownbug" <${senderMail}>`,
      to: `${email}`,
      subject: subject,
      html: mailBody,
    });
    return true;
  } catch (error) {
    console.log("Email error details:", error);
    return false;
  }
}

// filepath: /home/unknownbug/Desktop/portfolio/app/api/hire-me/route.ts
export async function POST(req: Request) {
  const { email, message, name } = await req.json();
  console.log(email, name, message);

  const myMailRes = await transferMail(
    "customer@unknownbug.tech",
    "vineetrajrj26@gmail.com",
    generatePersonalMailHTML(name, message, email),
    "New Customer"
  );

  if (!myMailRes) {
    // Indicate failure
    return NextResponse.json(
      {
        message: "Failed to send notification email. Please try again.",
        success: false,
      },
      { status: 500 } // Set HTTP status to 500
    );
  }

  const customerRes = await transferMail(
    "services@unknownbug.tech",
    email,
    generateCustomerHTML(name),
    "Thankyou for this golden opportunity"
  );

  if (!customerRes) {
    // Indicate failure (though the first email succeeded)
    // You might want more nuanced handling here, but for simplicity:
    return NextResponse.json(
      {
        message: "Failed to send confirmation email. Please try again.",
        success: false,
      },
      { status: 500 } // Set HTTP status to 500
    );
  }

  return NextResponse.json({
    message: "Mail sent successfully!", // Updated success message
    success: true,
  });
}
