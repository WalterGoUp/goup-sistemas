import Beneficios from '@/components/beneficios';
import Carousel from '@/components/carousel';
import Footer from '@/components/footer';
import Nav from '@/components/nav';
import Parceiros from '@/components/parceiros';
import Postagem from '@/components/postagem';
import Serviços from '@/components/serviços';

export default function Home() {
    return (
        <>
            <div>
                <Nav />
                <Carousel />
                <Serviços />
                <Postagem />
                <Beneficios />
                <Parceiros />
                <Footer />
            </div>
        </>
    );
}
