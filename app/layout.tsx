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
        <footer className="footer">
          {/* <div
            className="container d-flex justify-content-center"
            style={{ paddingTop: "1rem", color: "#90739a" }}
          >
            <Logo
              _url="/"
              _className="logo"
              _src="../img/Logo.svg"
              _alt="logo"
            />
            <p> © 2025 all rights reserved</p>
          </div>
        */}

          <ul
            className="container d-flex justify-content-center"
            style={{ textDecoration: "none" }}
          >
            <li>
              <Logo
                _url="/"
                _className="logo"
                _src="../img/Logo.svg"
                _alt="logo"
              />
            </li>
            <li>
              {" "}
              <p> © 2025 all rights reserved</p>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
