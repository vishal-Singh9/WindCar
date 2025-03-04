import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wind Car",
  description: "Explore stunning car visuals and experiences on Wind Car.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    url: "https://wind-car.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://static.vecteezy.com/system/resources/thumbnails/007/396/641/small/unique-and-modern-wc-initials-logo-design-free-vector.jpg",
        width: 1200,
        height: 630,
        alt: "Wind Car Preview",
      },
    ],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          <link
            rel="icon"
            href="/favicon.ico"
            sizes="64x64"
            type="image/x-icon"
          />
        </Head>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
