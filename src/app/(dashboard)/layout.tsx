import type { Metadata } from "next"
import Nav from "@/components/nav"

export const metadata: Metadata = {
    title: "Go Up | Gestão de sistemas",
    description:
        "Transforme a complexidade em simplicidade: potencialize seu negócio com nossa solução ERP, onde cada desafio se torna uma oportunidade e cada operação é otimizada para o sucesso sustentável. "
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}
