import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, company, email, phone, material, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"OneNas Contact Form" <${process.env.GMAIL_USER}>`,
    to: "onenasgroup@gmail.com",
    bcc: ["ayaan.onenas@outlook.com", "Nabil.onenas@outlook.com"],
    replyTo: email,
    subject: `New Quote Request from ${name}${company ? ` (${company})` : ""}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0F5132;">New Contact Form Submission</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; color: #666; width: 140px;">Name</td><td style="padding: 8px; font-weight: 600;">${name}</td></tr>
          ${company ? `<tr><td style="padding: 8px; color: #666;">Company</td><td style="padding: 8px;">${company}</td></tr>` : ""}
          <tr><td style="padding: 8px; color: #666;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px; color: #666;">Phone</td><td style="padding: 8px;">${phone}</td></tr>` : ""}
          ${material ? `<tr><td style="padding: 8px; color: #666;">Material</td><td style="padding: 8px;">${material}</td></tr>` : ""}
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f4f6f5; border-radius: 8px;">
          <p style="color: #666; margin: 0 0 8px;">Message</p>
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
