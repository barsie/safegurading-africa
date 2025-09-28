import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const OpenSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Safeguarding Africa",
  description: "Protecting Africa’s Future, One Child at a Time', 'Together, We Can Keep Young People Safe. Equiping communities to prevent harm, protect children, and help them thrive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${OpenSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
