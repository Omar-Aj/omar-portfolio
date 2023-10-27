import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Omar Ajaj",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} scroll-smooth bg-theme-white`}
    >
      <body>{children}</body>
    </html>
  );
}
