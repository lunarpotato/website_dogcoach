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
               <a href="https://www.google.com/maps/place/8280+Kreuzlingen/@47.6405613,9.1317982,13z/data=!3m1!4b1!4m6!3m5!1s0x479af72e3a0ca66d:0xf2bbe4623eb9d6f2!8m2!3d47.6447397!4d9.1707858!16zL20vMDN6cWI3?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"> 
            <img 
                height= "30em"
                src="../img/pin.png"
                alt="Maps"/> </a> 
          </div>
        </footer>
      </body>
    </html>
  );
}
