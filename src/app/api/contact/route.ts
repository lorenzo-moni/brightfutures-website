import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type } = body;

    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let subject: string;
    let html: string;

    if (type === "company") {
      subject = `[BrightFutures] New Company Interest: ${body.companyName}`;
      html = `
        <h2>New Company Interest Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.companyName}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Contact</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.contactName}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.email}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.phone || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company Size</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.companySize || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Industry</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.industry || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.message || "N/A"}</td></tr>
        </table>
      `;
    } else {
      subject = `[BrightFutures] New Student Pre-Registration: ${body.name}`;
      html = `
        <h2>New Student Pre-Registration</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.name}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.email}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">University</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.university}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Degree</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.degree || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Field</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.field}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Graduation Year</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.graduationYear || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${body.message || "N/A"}</td></tr>
        </table>
      `;
    }

    // Save to database
    const client = await pool.connect();
    try {
      if (type === "company") {
        await client.query(
          `INSERT INTO company_submissions
            (company_name, contact_name, email, phone, company_size, industry, message)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [
            body.companyName,
            body.contactName,
            body.email,
            body.phone || null,
            body.companySize || null,
            body.industry || null,
            body.message || null,
          ]
        );
      } else {
        await client.query(
          `INSERT INTO student_submissions
            (name, email, university, degree, field, graduation_year, message)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [
            body.name,
            body.email,
            body.university,
            body.degree || null,
            body.field,
            body.graduationYear || null,
            body.message || null,
          ]
        );
      }
    } finally {
      client.release();
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.NOTIFY_EMAIL,
      replyTo: body.email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send notification" },
      { status: 500 }
    );
  }
}
