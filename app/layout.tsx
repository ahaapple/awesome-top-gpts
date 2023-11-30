import "./globals.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Call from "./components/Call";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOP GPTs - Awesome Top GPTs Store",
  description:
    "TOP GPTs is a Awesome Top GPTs Store. Support search for GPTs you like.",
  keywords:
    "GPTs, GPTs store, TOP GPTs, Best GPTs, vector search GPTs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <main>
          <Header />
          {children}
          <Call/>
          <Footer />
        </main>

        <script
          defer
          data-domain="topgpts.club"
          src="https://plausible.io/js/script.js"
        ></script>
      </body>
    </html>
  );
}
