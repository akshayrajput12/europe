import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModalWrapper from "@/components/QuoteModalWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Chronicles - Exhibition Stand Builder in Europe",
  description:
    "Comprehensive exhibition stand design and fabrication services across Europe. Custom stands, modular solutions, and turnkey exhibition services.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#a5cd39",
      },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#a5cd39",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <QuoteModalWrapper>
          <Header />
          {children}
          <Footer />
        </QuoteModalWrapper>
      </body>
    </html>
  );
}
