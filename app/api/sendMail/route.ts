import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, telefonNummer, nachricht } = await req.json();

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

    // E-Mail versenden
    await transporter.sendMail({
      from: `"Kontaktformular" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, 
      subject: "Neue Nachricht vom Kontaktformular",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nTelefon: ${telefonNummer}\nNachricht: ${nachricht}`,
    });

    return NextResponse.json({ message: "E-Mail erfolgreich gesendet!" }, { status: 200 });
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    return NextResponse.json({ message: "Fehler beim Senden der E-Mail" }, { status: 500 });
  }
}
