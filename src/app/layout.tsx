import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingCard from "@/components/FloatingCard";
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from "@/components/Navbar";
//  import ChatBots from "@/components/ChatBots";
 import MyHotelChatBot from '@/components/Chatbot/MyHotelChatBot'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "slvskysuites",
  description: "A luxury hotel suites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar/>
        {/* <ChatBots />  */}
        <MyHotelChatBot />
        {children}
        {/* <FloatingCard/> */}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
