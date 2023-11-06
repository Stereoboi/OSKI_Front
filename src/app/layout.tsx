import type { Metadata } from "next";
import { Righteous, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { AppNavbar } from "./components/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Testify app",
  description: "Best way to check your knowledge ",
};

const righteous = Righteous({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-righteous",
});

const montserrat_Alternates = Montserrat_Alternates({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat_Alternates",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${righteous.variable} ${montserrat_Alternates.variable}`}
      >
        <AppNavbar />
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
