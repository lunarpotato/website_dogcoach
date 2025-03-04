import "./costum-bootstrap.scss";
import { Montserrat } from "next/font/google";

// components
import Navbar from './components/Navbar/Navbar' 



const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  
});

export const metadata = {
  title: 'Tine Coaching',
  description: 'Professionelles Hunde & Mensch Coaching'
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
