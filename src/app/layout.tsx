import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = "https://spiritualwalk.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Spiritual Walk | Luxury Buddhist Pilgrimage & Wellness Retreat",
    template: "%s | Spiritual Walk",
  },
  description:
    "A 12-day premium Buddhist pilgrimage through Bodh Gaya, Rajgir, Nalanda, Vaishali, Kushinagar, Lumbini, Sarnath and Varanasi — luxury accommodation, meditation, yoga and authentic cultural immersion in the footsteps of the Buddha.",
  keywords: [
    "Buddhist pilgrimage",
    "luxury spiritual retreat India",
    "Bodh Gaya tour",
    "Buddha trail",
    "meditation retreat India",
    "Mahabodhi Temple",
  ],
  openGraph: {
    title: "Spiritual Walk | Walk in the Footsteps of the Buddha",
    description:
      "12 Days of luxury pilgrimage, meditation and wellness across India's sacred Buddhist circuit.",
    url: siteUrl,
    siteName: "Spiritual Walk",
    images: [{ url: "/images/mahabodhi-1.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Walk | Walk in the Footsteps of the Buddha",
    description:
      "A luxury 12-day Buddhist pilgrimage and wellness retreat across sacred India.",
    images: ["/images/mahabodhi-1.jpg"],
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Spiritual Walk",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description:
      "Luxury Buddhist pilgrimage and wellness retreat operator preserving India's spiritual and artisan heritage.",
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Walk in the Footsteps of the Buddha — 12 Day Pilgrimage",
    description:
      "A 12-day luxury Buddhist pilgrimage through Bodh Gaya, Rajgir, Nalanda, Vaishali, Kushinagar, Lumbini, Sarnath and Varanasi.",
    touristType: "Spiritual & Wellness Travellers",
    provider: { "@type": "Organization", name: "Spiritual Walk" },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
