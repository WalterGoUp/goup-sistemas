import Beneficios from "@/components/beneficios"
import Carousel from "@/components/carousel"
import Footer from "@/components/footer"
import Parceiros from "@/components/parceiros"
import Postagem from "@/components/postagem"
import Serviços from "@/components/serviços"

export default function Home() {
    return (
        <>
            <div>
                <Carousel />
                <Serviços />
                <Postagem />
                <Beneficios />
                <Parceiros />
                <Footer />
            </div>
        </>
    )
}
