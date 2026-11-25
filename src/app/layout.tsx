import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Steven Wilson Photography CRM",
  description: "Client, booking and invoice management for photographers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
