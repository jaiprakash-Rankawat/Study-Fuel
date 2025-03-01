import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Study Fuel",
  description: "Jai Prakash Rankawat - Study Fuel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Navbar should be fixed at the top */}
        <Navbar className="fixed top-0 left-0 w-full z-50 p-4 bg-white shadow-md " />
        {/* Main Content Area (Pushes footer to the bottom) */}
        <main className="flex-grow mt-16">{children}</main>

        {/* Footer should be at the bottom but not fixed */}
        <Footer className="w-full p-4 bg-gray-900 text-white" />
      </body>
    </html>
  );
}
