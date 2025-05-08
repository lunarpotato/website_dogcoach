import "./costum-bootstrap.scss";
import { Montserrat } from "next/font/google";

// components
import Navbar from "./components/Navbar/Navbar";

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
          <div
            className="container d-flex justify-content-center"
            style={{ paddingTop: "1rem", color: "#90739a" }}
          >
            © 2025 all rights reserved
          </div>
        </footer>
      </body>
    </html>
  );
}
