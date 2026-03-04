import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightFutures - Bridging Ambition and Industry Demand",
  description:
    "BrightFutures connects top university talent with companies through bonded sponsorship. Companies secure elite junior talent, students get funded education and guaranteed careers.",
  keywords: [
    "talent acquisition",
    "student sponsorship",
    "SME hiring",
    "engineering talent",
    "EPFL",
    "Switzerland",
    "bonded sponsorship",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
