import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mot's Pit BBQ | Authentic Wood-Smoked BBQ Since 1996 | Augusta, GA",
  description:
    "Authentic wood-smoked BBQ in Augusta, GA since 1996. Pulled pork, ribs, brisket, smoked chicken & more. Order online for pickup — skip the apps, support local.",
  keywords: [
    "BBQ",
    "barbecue",
    "Augusta GA",
    "smoked meat",
    "pulled pork",
    "ribs",
    "brisket",
    "takeout",
    "order online",
  ],
  openGraph: {
    title: "Mot's Pit BBQ | Authentic Wood-Smoked BBQ Since 1996",
    description:
      "Real pit-smoked BBQ in Augusta, GA. Order online for pickup.",
    type: "website",
    images: ["/images/Sampledinner.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
