import "./globals.css";
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
        <nav className="navbar navbar-expand-lg sticky-bottom position-relative">
          <div className="container-fluid">Hier ist der Footer</div>
        </nav>
      </body>
    </html>
  );
}
