import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Toaster } from "sonner";
import { Footer } from "@/components/layout/Footer";
import { MetaData as generatedMetadata } from "@/utils/constants";
import { ConvexClientProvider } from "@/providers/ConvexProvider";
import { AuthProvider } from "@/contexts/auth-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generatedMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <Toaster position="top-center" richColors />
        <ConvexClientProvider>
          <AuthProvider>{children}</AuthProvider>
        </ConvexClientProvider>
        <Footer />
      </body>
    </html>
  );
}
