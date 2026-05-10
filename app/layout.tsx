import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Credex AI Spend Audit",
  description:
    "AI-powered spend optimization platform for modern teams.",

  openGraph: {
    title: "Credex AI Spend Audit",
    description:
      "Reduce unnecessary AI subscription costs with intelligent spend analysis.",
    url: "https://credex-ai-spend-audit-ov9s.vercel.app/",
    siteName: "Credex AI Spend Audit",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Credex AI Spend Audit",
    description:
      "AI-powered spend optimization platform for modern teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}