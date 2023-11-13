import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });
export const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//     title: 'GoUp | Gestão de sistemas',
//     description: 'GoUp gestão de sistemas',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
