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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${inter.variable} ${jetbrains.variable} scroll-smooth dark`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <PCBBackground />
          <Header />
          <main className="pt-16 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
