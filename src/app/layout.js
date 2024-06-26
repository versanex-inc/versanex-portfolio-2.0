import Navbar from "@/Components/Home/Navbar/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import { NextAuthProvider } from "./Providers";
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "VersaNex - Home",
  description: "Generated by versanex",
  icons:{
    icon:['/imgs/favicon/favicon.ico?v=4'],
    apple:['imgs/favicon/apple-touch-icon.png?v=4'],
    shortcut:['imgs/favicon/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NextTopLoader 
       height={4}
       color="#f2ad08"
      />
        <NextAuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </NextAuthProvider>
        </body>
    </html>
  );
}
