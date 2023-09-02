import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omar Ajaj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
