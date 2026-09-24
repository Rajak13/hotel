import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Dharan | Booking & Operations Platform",
  description: "Boutique hotel stay in Dharan, Nepal. Real-time booking, room showcase, and guest services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased text-neutral-900 bg-white">
        {children}
      </body>
    </html>
  );
}
