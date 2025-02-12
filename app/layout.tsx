import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { DataProvider } from "./components/DataContext";

export const metadata: Metadata = {
  title: "Welcome",
  description: "My portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <DataProvider>
          <Nav />
          <main className="mt-[2rem] md:mt-[3rem]">
            {children}
            <Analytics />
          </main>
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}