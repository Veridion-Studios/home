import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Header } from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veridion Studios",
  description: "A suite of tools and programs for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:bg-black bg-white antialiased`}
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
          }}
        >
  
        <BubbleBackground />
        </div>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <Header />
              {children}
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
