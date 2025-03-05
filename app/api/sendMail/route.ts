import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phonenumber, textmessage } = await req.json();

    // Erstelle einen Nodemailer-Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Oder dein SMTP-Provider
      auth: {
        user: process.env.EMAIL_USER, // Setze deine E-Mail-Adresse
        pass: process.env.EMAIL_PASS, // Setze dein App-Passwort (kein normales Passwort)
      },
    });

    // E-Mail versenden
    await transporter.sendMail({
      from: `"Kontaktformular" <${process.env.EMAIL_USER}>`,
      to: "webseitenbetreiber@email.com", // Empfänger-E-Mail
      subject: "Neue Nachricht vom Kontaktformular",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nTelefon: ${phonenumber}\nNachricht: ${textmessage}`,
    });

    return NextResponse.json({ message: "E-Mail erfolgreich gesendet!" }, { status: 200 });
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    return NextResponse.json({ message: "Fehler beim Senden der E-Mail" }, { status: 500 });
  }
}
