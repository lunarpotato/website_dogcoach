/* eslint-disable @next/next/no-img-element */
import "./globals.css";
import { Montserrat } from "next/font/google";

// components
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Logo/Logo";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Team Mensch-Hund",
  description: "Professionelles Mensch & Hunde Coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <title>Team Hund-Mensch</title>

      <meta name="description" content="Team Hund-Mensch bietet individuelles Coaching für ein harmonisches Hund-Mensch-Team. Angeboten werden Einzelcoachings. Artgerechte Kommunikation, Verständnis, Wertschätzung und Verbundenheit sind wichtige Begriffe auf dem Weg zu einem entspannten Team Hund-Mensch."/>
      <meta name="keywords" content="Individuelles Coaching, harmnonisches Hund-Mensch-Team, DogCoach Schweiz, Hundecoaching Ostschweiz, Christine Strauss Coaching, Artgerechte Kommunikation"/>
      <meta property="og:title" content="Team Hund-Mensch"/>
      <meta property="og:descripion" content="Team Hund-Mensch bietet individuelles Coaching für ein harmonisches Hund-Mensch-Team. Angeboten werden Einzelcoachings. Artgerechte Kommunikation, Verständnis, Wertschätzung und Verbundenheit sind wichtige Begriffe auf dem Weg zu einem entspannten Team Hund-Mensch."/>
      <meta property="og:image" content="/img/logo.svg"/>
      
      <body className={montserrat.className}>
        {/* Navigation */}
        <Navbar />
        {children}

        {/* Footer */}
        <footer
          className="footer container-fluid text-center"
          style={{
            color: "#90739a",
            height: "auto",
            paddingBottom: "0px",
          }}
        >
          <div className="col mb-2" style={{ paddingTop: "2rem" }}>
            <Logo
              _url="/"
              _className="logo"
              _src="../img/Logo.svg"
              _alt="logo"
              _height={90}
              _width={90}
            />
          </div>
          <div
            className="col"
            style={{
              marginBottom: "0",
              paddingTop: "1rem",
              paddingBottom: "2rem",
              letterSpacing: "0.05rem",
            }}
          >
            © 2025 all rights reserved
          </div>
          <div className="" style={{ paddingBottom: "2rem"}}> 
            <a href="mailto:teamhundmensch@gmail.com"> 
            <img 
                height= "30em"
                src="../img/mail.png"
                alt="Mail"/> </a> 
              </div>
          <div className="" style={{ paddingBottom: "2rem"}}>
       
          </div>
        </footer>
      </body>
    </html>
  );
}
