import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      telefonNummer,
      nachricht,
      captchaToken,
    } = await req.json();


console.log({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE,
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS ? "***" : "NOT SET",
});


    // reCAPTCHA-Token wird geprüft.
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    const captchaRes = await fetch(verifyUrl, { method: "POST" });
    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return NextResponse.json(
        { message: "reCAPTCHA-Überprüfung fehlgeschlagen!" },
        { status: 400 }
      );
    }
    console.log("baue Transporter zusammen")
    // Erstelle einen Nodemailer-Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      secure: process.env.EMAIL_SECURE === "true",
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log("Transporter ist gebaut: ", {transporter});

    console.log("sendMail Prozess gestartet...");

    // E-Mail versenden
     await transporter.sendMail({
      from: `"Kontaktformular" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Neue Nachricht vom Kontaktformular",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nTelefon: ${telefonNummer}\nNachricht: ${nachricht}`,
    });

    console.log("sendMail Prozess beendet");

    return NextResponse.json(
      { message: "E-Mail erfolgreich gesendet!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    return NextResponse.json(
      { message: "Fehler beim Senden der E-Mail" },
      { status: 500 }
    );
  }
}
