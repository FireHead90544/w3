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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="container flex flex-col max-w-3xl mx-auto min-h-screen px-4 py-5">
            <Header />
            <main className="flex-1 flex">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
