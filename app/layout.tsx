import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/(theme)/ThemeProvider";
import Header from "@/components/(layout)/Header";
import Footer from "@/components/(layout)/Footer";
import "./globals.css";
import infoMeta from "@/content/misc/meta.json";
import { getHostURL } from "@/lib/misc";

const font = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(getHostURL()),
  title: infoMeta.name,
  description: infoMeta.description,
  authors: {
    name: infoMeta.name,
    url: getHostURL(),
  },
  creator: infoMeta.name,
  openGraph: {
    type: "website",
    title: infoMeta.name,
    description: infoMeta.description,
    images: infoMeta.image
  },
  twitter: {
    card: "summary_large_image",
    title: infoMeta.name,
    description: infoMeta.description,
    creator: `@${infoMeta.twitter}`,
    images: infoMeta.image
  }
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
            <Header nick={infoMeta.header.nick} highlight={infoMeta.header.highlight} />
            <main className="flex-1 flex">
              {children}
            </main>
            <Footer
              github={`https://github.com/${infoMeta.github}`}
              linkedin={`https://linkedin.com/in/${infoMeta.linkedin}`}
              twitter={`https://x.com/${infoMeta.twitter}`}
              mail={infoMeta.mail}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
