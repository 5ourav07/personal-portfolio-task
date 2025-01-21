import LayoutProvider from "@/components/Layout/LayoutProvider";
import { Toaster } from "@/components/ui/sonner";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Personal Portfolio Landing Page",
  description: "Personal Portfolio Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <LayoutProvider>{children}</LayoutProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
