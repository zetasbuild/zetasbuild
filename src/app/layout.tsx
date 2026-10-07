import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zetasbuild.com"),
  title: "ZetasBuild — Building Digital Solutions That Move Businesses Forward",
  description:
    "From high-performance websites and mobile applications to AI-powered solutions and custom software, ZetasBuild builds digital experiences designed for real-world growth.",
  keywords: [
    "ZetasBuild",
    "software company",
    "web development",
    "mobile app development",
    "AI applications",
    "custom software",
    "Sri Lanka tech",
    "Next.js agency",
  ],
  authors: [{ name: "ZetasBuild" }],
  icons: {
    icon: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
  openGraph: {
    title: "ZetasBuild — Building Digital Solutions That Move Businesses Forward",
    description:
      "From high-performance websites and mobile applications to AI-powered solutions and custom software.",
    url: "https://zetasbuild.com",
    siteName: "ZetasBuild",
    images: [
      {
        url: "/brand/logo.png",
        width: 800,
        height: 800,
        alt: "ZetasBuild Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
