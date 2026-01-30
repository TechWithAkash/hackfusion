import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HealthBridge AI | Bridging the Healthcare Gap",
  description: "AI-powered hybrid healthcare platform for underserved communities",
};

import { LanguageProvider } from "@/context/LanguageContext";
import { GoogleTranslate } from "@/components/shared/GoogleTranslate";

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <LanguageProvider>
          <GoogleTranslate />
          {children}
        </LanguageProvider>

      </body>
    </html>
  );
}

