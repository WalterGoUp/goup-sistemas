'use client';
import React, { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { rubik } from '../app/layout';
import Contato from './contato';

export default function Carousel() {
    const sliderRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: true, // Ativar o autoplay
        autoplaySpeed: 500000000,
    };

    return (
        <div className="mb-5 h-screen">
            <Slider {...settings} className="h-3/4 w-full bg-gray-400">
                <div className="  h-screen ">
                    <div
                        className="flex h-3/4 flex-col justify-center bg-cover  bg-no-repeat "
                        style={{
                            backgroundImage:
                                ' linear-gradient(265deg, rgba(57,26,125,0.9) 40%, transparent 90%), url("/images/pc.jpg") ',
                        }}
                    >
                        <div className="grid grid-cols-2">
                            <div className="col-span-1">
                                {/* Conteúdo da primeira coluna */}
                            </div>
                            <div className="col-span-1">
                                <h2
                                    className={`${rubik.className} text-extrabold  text-6xl text-white`}
                                >
                                    Sistema completo e fácil de usar.
                                </h2>
                                <h3
                                    className={`${rubik.className} text-extrabold  pt-10 text-xl text-white`}
                                >
                                    Nosso sistema oferece uma solução completa e
                                    abrangente. Com todas as ferramentas
                                    necessárias para a gestão de notas fiscais,
                                    controle de vendas e muito mais.
                                </h3>
                                <div className="flex justify-center pt-5">
                                    <a
                                        href="https://api.whatsapp.com/send?phone=32999788128&text=Olá, gostaria de saber mais sobre a GoUp!"
                                        target="blank"
                                    >
                                        <Button
                                            variant="outlined"
                                            className={` ${rubik.className} items-center rounded-2xl border-none bg-[#950B9A] px-20 font-bold
                                            text-white hover:border-none hover:bg-white hover:text-[#391a7d]`}
                                        >
                                            Fale com a GoUp!
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  h-screen ">
                    <div
                        className="flex h-3/4 flex-col justify-center bg-cover bg-center bg-no-repeat "
                        style={{
                            backgroundImage:
                                ' linear-gradient(130deg, rgba(57,26,125,0.9) 40%, transparent 90%), url("/images/student.jpg") ',
                        }}
                    >
                        <div className=" flex w-1/2 flex-col items-center justify-center p-4  ">
                            <h2
                                className={`${rubik.className} text-extrabold  text-6xl  text-white`}
                            >
                                Nossa equipe está pronta para você
                            </h2>
                            <h2
                                className={`${rubik.className} text-extrabold  pt-10 text-xl text-white`}
                            >
                                Seja qual for a sua necessidade, estamos prontos
                                para superar as expectativas e garantir que você
                                tenha a melhor experiência possível. Seu sucesso
                                é o nosso compromisso.
                            </h2>
                            <div className="flex justify-center pt-5">
                                <Button
                                    variant="outlined"
                                    onClick={openModal}
                                    className={` ${rubik.className} items-center rounded-2xl border-none bg-[#950B9A] px-20  font-bold
                                    text-white hover:border-none hover:bg-white hover:text-[#391a7d]`}
                                >
                                    Fale com a GoUp
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  h-screen ">
                    <div
                        className="flex h-3/4 flex-col justify-center bg-cover bg-center bg-no-repeat "
                        style={{
                            backgroundImage:
                                ' linear-gradient(265deg ,  rgba(57,26,125,0.9) 40%, transparent 90%), url("/images/aperto.jpg") ',
                        }}
                    >
                        <div className="grid grid-cols-2">
                            <div className="col-span-1">
                                {/* Conteúdo da primeira coluna */}
                            </div>
                            <div className="col-span-1">
                                <h2
                                    className={`${rubik.className} text-extrabold  text-6xl text-white`}
                                >
                                    Compromisso Inabalável com Nossos Clientes
                                </h2>
                                <h3
                                    className={`${rubik.className} text-extrabold   pt-10 text-xl text-white`}
                                >
                                    Estamos dedicados a superar as expectativas,
                                    ouvir atentamente suas necessidades e
                                    trabalhar incansavelmente para garantir o
                                    seu sucesso.
                                </h3>
                                <div className="flex justify-center pt-5">
                                    <Button
                                        variant="outlined"
                                        onClick={openModal}
                                        className={` ${rubik.className} items-center rounded-2xl border-none bg-[#950B9A] px-20  font-bold
                                    text-white hover:border-none hover:bg-white hover:text-[#391a7d]`}
                                    >
                                        Fale com a GoUp
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" h-screen">
                    <div
                        className="flex h-3/4 flex-col justify-center bg-cover bg-center bg-no-repeat "
                        style={{
                            backgroundImage:
                                ' linear-gradient(65deg ,  rgba(57,26,125,0.9) 40%, transparent 90%), url("/images/digital.jpg") ',
                        }}
                    >
                        <div className=" flex w-1/2 flex-col items-center justify-center ">
                            <h2
                                className={`${rubik.className} text-extrabold  text-6xl text-white`}
                            >
                                Gestão de Notas Fiscais
                            </h2>
                            <h2
                                className={`${rubik.className} text-extrabold  text-6xl text-white`}
                            >
                                Simplificada
                            </h2>
                        </div>
                        <div className='justify-center" mt-4 flex w-1/2 flex-col items-center'>
                            <p
                                className={`${rubik.className} text-extrabold  text-xl text-white`}
                            >
                                Simplificamos o controle de notas fiscais e
                                vendas.
                            </p>
                            <div className="pt-5">
                                <Button
                                    variant="outlined"
                                    onClick={openModal}
                                    className={` ${rubik.className} items-center rounded-2xl border-none bg-[#950B9A] px-20  font-bold
                                    text-white hover:border-none hover:bg-white hover:text-[#391a7d]`}
                                >
                                    Fale com a GoUp
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <Contato open={modalOpen} onClose={closeModal} />
        </div>
    );
}
