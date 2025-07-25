/* eslint-disable @next/next/no-img-element */
import "./globals.css";
import { Montserrat } from "next/font/google";

// components
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Logo/Logo";
import Head from "next/head";
import ClientMeta from "./components/ClientMeta/ClientMeta";
import { SpeedInsights } from "@vercel/speed-insights/next";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Team Hund-Mensch | Christine Strauss",
  description: "Professionelles Mensch & Hunde Coaching in der Region Kreuzlingen",
  keywords: "team hund und mensch, training für mensch und hund, hund verstehen, kommunizieren mit hund, Christine Strauss"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">

      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
        <meta name="keywords" content={metadata.keywords}/>

        <meta property="og:title" content={metadata.title}/>
        <meta property="og:description" content={metadata.description}/>
        <meta property="og:image" content="/img/Logo.svg"/> 

        <ClientMeta/>

        <link rel="canonical" href="www.teamhundmensch.ch" />
      </Head>
      

      <body className={montserrat.className}>
        {/* Navigation */}
        <Navbar />
        {children}
        <SpeedInsights/>

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
              _alt="Team Hund-Mensch"
              _height={90}
              _width={90}
            />
          </div>
           <h4
            className="col"
            style={{
              marginBottom: "0",
              paddingTop: "1rem",
              letterSpacing: "0.05rem",
            }}
          >
           Christine Strauss
          </h4>
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
