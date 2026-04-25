import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingAgent } from "@/components/BookingAgent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Belfast Psychology Services | Therapy for Children, Young People & Adults",
  description: "Compassionate and professional psychological therapy and counselling in Belfast. We support a range of difficulties including anxiety, depression, and trauma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <BookingAgent />
        <Footer />
      </body>
    </html>
  );
}
