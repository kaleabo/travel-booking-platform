import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
  title: "Travel Booking App | Plan Your Next Adventure",
  description:
    "Discover and book your next travel adventure with our easy-to-use platform. Explore destinations, compare prices, and manage your bookings seamlessly.",
  keywords:
    "travel, booking, flights, hotels, vacation, adventure, travel planning",
  authors: [{ name: "Kaleab Selamawi", url: "https://travel-ease.vercel.app" }],
  creator: "Kaleab Selamawi",
  publisher: "TravelEase",
  openGraph: {
    title: "Travel Booking App",
    description: "Plan your next adventure with our travel booking platform.",
    url: "https://travel-ease.vercel.app",
    siteName: "Travel Booking App",
    images: [
      {
        url: "https://travel-ease.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Travel Booking App - Plan Your Next Adventure",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Booking App",
    description: "Discover and book your next travel adventure.",
    images: ["https://travel-ease.vercel.app/og-image.png"],
    site: "@kaleabox",
    creator: "@kaleabox",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ff6600", // Example theme color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader showSpinner={false} />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
