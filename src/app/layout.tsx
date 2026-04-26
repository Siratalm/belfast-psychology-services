import type { Metadata } from "next";
import { Geist, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingAgent } from "@/components/BookingAgent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Belfast Psychology Services | Clinical Psychologists in Belfast",
  description: "HCPC registered Clinical Psychologists in Belfast providing evidence-based therapy for children, adults, and families. Specializing in CBT, EMDR, and ASD assessments.",
  keywords: ["Psychologist Belfast", "CBT Belfast", "EMDR Belfast", "Autism Assessment Belfast", "Therapy Belfast", "Mental Health Services Northern Ireland"],
  authors: [{ name: "Belfast Psychology Services" }],
  openGraph: {
    title: "Belfast Psychology Services | Expert Clinical Therapy",
    description: "Compassionate, evidence-based psychological support for a brighter future.",
    url: "https://belfastpsychologyservices.com",
    siteName: "Belfast Psychology Services",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belfast Psychology Services",
    description: "Expert psychological therapy for children and adults in Belfast.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Belfast Psychology Services",
  "image": "https://belfastpsychologyservices.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3 Wellington Park, Malone Road",
    "addressLocality": "Belfast",
    "postalCode": "BT9 6DJ",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 54.5847,
    "longitude": -5.9372
  },
  "url": "https://belfastpsychologyservices.com",
  "telephone": "+442890388345",
  "priceRange": "££",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "22:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${ebGaramond.variable} antialiased font-sans`}>
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
