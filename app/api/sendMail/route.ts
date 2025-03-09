import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, telefonNummer, nachricht } = await req.json();

    // Erstelle einen Nodemailer-Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // E-Mail versenden
    await transporter.sendMail({
      from: `"Kontaktformular" <${process.env.EMAIL_USER}>`,
      to: "danial.nowak@gmail.com", 
      subject: "Neue Nachricht vom Kontaktformular",
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nTelefon: ${telefonNummer}\nNachricht: ${nachricht}`,
    });

    return NextResponse.json({ message: "E-Mail erfolgreich gesendet!" }, { status: 200 });
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    return NextResponse.json({ message: "Fehler beim Senden der E-Mail" }, { status: 500 });
  }
}
