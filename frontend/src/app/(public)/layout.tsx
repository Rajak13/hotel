"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {!isHomePage && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isHomePage && <Footer />}
    </div>
  );
}
