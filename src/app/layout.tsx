import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SchemaSync.AI | AI-Powered Salesforce Schema Integration for M&A",
    template: "%s | SchemaSync.AI",
  },
  description:
    "AI-powered Salesforce schema integration mapper for M&A. Unify CRM instances post-acquisition with intelligent schema harmonization, conflict detection, and migration planning.",
  metadataBase: new URL("https://schemasync.ai"),
  openGraph: {
    title: "SchemaSync.AI | AI-Powered Salesforce Schema Integration for M&A",
    description:
      "Unify Salesforce CRM instances post-acquisition with AI-powered schema harmonization, conflict detection, and migration planning.",
    url: "https://schemasync.ai",
    siteName: "SchemaSync.AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SchemaSync.AI | AI-Powered Salesforce Schema Integration for M&A",
    description:
      "Unify Salesforce CRM instances post-acquisition with AI-powered schema harmonization.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SchemaSync.AI",
              url: "https://schemasync.ai",
              description:
                "AI-powered Salesforce schema integration mapper for M&A",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                url: "https://schemasync.ai/contact",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-navy-950 text-silver-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
