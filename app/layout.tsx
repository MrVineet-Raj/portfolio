import type React from "react";
import "@/app/globals.css";
import { Rubik } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vineet Raj | Full-Stack Developer",
  description:
    "Portfolio of Vineet Raj, a full-stack developer specializing in MERN Stack, Rust, Blockchain, React Native, and AI-powered applications.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vineetraj.com",
    title: "Vineet Raj | Full-Stack Developer",
    description:
      "Portfolio of Vineet Raj, a full-stack developer specializing in MERN Stack, Rust, Blockchain, React Native, and AI-powered applications.",
    siteName: "Vineet Raj Portfolio",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rubik.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
