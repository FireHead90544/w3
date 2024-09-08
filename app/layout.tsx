import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/(theme)/ThemeProvider";
import Header from "@/components/(layout)/Header";
import Footer from "@/components/(layout)/Footer";

const font = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rudransh Joshi",
  description: "Just a typical relatable guy you can't relate to.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="container flex flex-col max-w-3xl mx-auto min-h-screen px-4 py-5">
            <Header nick="rudra" highlight="xd" />
            <main className="flex-1 flex">
              {children}
            </main>
            <Footer
              github="https://github.com/FireHead90544"
              linkedin="https://linkedin.com/in/rudraxd"
              twitter="https://x.com/_rudra_xd_"
              mail="rudranshjoshi1806@gmail.com"
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
