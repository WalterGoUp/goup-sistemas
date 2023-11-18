import { Inter, Rubik } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
export const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap"
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
