import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medan Dev | Software Developer & AI Enthusiast",
  description: "Professional 3D Portfolio of Medan Dev - Software Development student specializing in full-stack web development and AI integration.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Medan Dev | Software Developer & AI Enthusiast",
    description: "Professional 3D Portfolio of Medan Dev - Software Development student specializing in full-stack web development and AI integration.",
    images: [
      {
        url: "/images/preview.jpg",
        width: 800,
        height: 1000,
        alt: "Medan Dev Profile",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medan Dev | Software Developer & AI Enthusiast",
    description: "Professional 3D Portfolio of Medan Dev - Software Development student specializing in full-stack web development and AI integration.",
    images: ["/images/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
