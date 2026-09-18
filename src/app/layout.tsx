import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Phu Cuong | Software Engineering",
  description: "Portfolio of Le Phu Cuong, Software Engineering student.",
  icons: {
    icon: "/images/avatar.jpg",
    shortcut: "/images/avatar.jpg",
    apple: "/images/avatar.jpg",
  },
  openGraph: {
    title: "Le Phu Cuong | Software Engineering",
    description: "Portfolio of Le Phu Cuong, Software Engineering student.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
