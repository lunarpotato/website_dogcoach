import { Montserrat, Montserrat_Alternates} from "next/font/google";
import "./globals.css";

// components
import Navbar from './components/Navbar' 


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${montserrat.variable}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
