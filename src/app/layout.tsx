import type { Metadata } from "next";
import { Chakra_Petch, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import PCBBackground from "@/components/PCBBackground";

const chakraPetch = Chakra_Petch({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oman Khalid Butt — Embedded Systems Engineer",
  description: "Portfolio of Oman Khalid Butt — embedded systems, edge AI, autonomous robotics, blockchain IoT, and FPGA design.",
  metadataBase: new URL("https://omankhalid.me"),
  openGraph: {
    title: "Oman Khalid Butt — Embedded Systems Engineer",
    description: "Edge AI medical devices. Blockchain energy networks. Autonomous drones. Custom processors on FPGA.",
    url: "https://omankhalid.me",
    siteName: "Oman Khalid Butt",
    images: [{ url: "/images/oman-hero.jpg", width: 1200, height: 630, alt: "Oman Khalid Butt" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oman Khalid Butt — Embedded Systems Engineer",
    description: "Edge AI medical devices. Blockchain energy networks. Autonomous drones. Custom processors on FPGA.",
    images: ["/images/oman-hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${inter.variable} ${jetbrains.variable} scroll-smooth dark`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-[#0A1410] focus:rounded-lg focus:text-sm focus:font-semibold">
            Skip to content
          </a>
          <PCBBackground />
          <Header />
          <main id="main-content" className="pt-16 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
