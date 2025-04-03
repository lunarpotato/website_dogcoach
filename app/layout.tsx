import "./globals.css";
import { Montserrat } from "next/font/google";

// components
import Navbar from './components/Navbar/Navbar' 


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  
});

export const metadata = {
  title: 'Team Mensch-Hund',
  description: 'Professionelles Mensch & Hunde Coaching'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={montserrat.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
