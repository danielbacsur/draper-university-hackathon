import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import Script from "next/script";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AiQuity",
  description:
    "AiQuity is the revolutionary marketplace for AI models, where innovation meets investment.\n" +
    "Our platform empowers creators to tokenize their AI models, while investors can acquire shares in cutting-edge artificial intelligence.\n" +
    "Uniquely, AiQuity distributes equity to model shareholders based on usage, all powered by a decentralized network where miners earn Bitcoin rewards.\n" +
    "We offer access to every model available on Hugging Face, the world's leading AI community platform, providing unparalleled variety and quality.\n" +
    "Join AiQuity today and be part of the future where AI ownership, decentralized computing, and blockchain technology converge to create unparalleled opportunities in the world of artificial intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://app.viral-loops.com/widgetsV2/core/loader.js"
          data-campaign-id="acpGNiK3NioYynVD71NEwqc71sU"
          id="viral-loops-loader"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
