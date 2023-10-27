import Carousel from '@/components/carousel';
import Nav from '@/components/nav';
import Serviços from '@/components/serviços';

export default function Home() {
    return (
        <>
            <div className="h-screen ">
                <Nav />
                <Carousel />
                <Serviços />
            </div>
        </>
    );
}
