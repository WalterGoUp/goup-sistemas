"use client"
import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import { rubik } from "@/app/layout"

export default function Parceiros() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false
    }

    const partnerImages1 = [
        { src: "/images/agroboi.jpg", alt: "Agroboi" },
        { src: "/images/borracha.jpg", alt: "Shoping da borracha" },
        { src: "/images/casarao.jpg", alt: "Casarão" },
        { src: "/images/embalagens.jpg", alt: "Embalagens" },
        { src: "/images/emes.jpg", alt: "Emes" },
        { src: "/images/guarino.jpg", alt: "Casas guarino" },
        { src: "/images/hortilar.jpg", alt: "hortilar" },
        { src: "/images/kassia.jpg", alt: "Hortilar" },
        { src: "/images/fielgas.jpg", alt: "fielgas" },
        { src: "/images/kiferro.jpg", alt: "ki-ferro" },
        { src: "/images/kuelhos.jpg", alt: "kuelhos" },
        { src: "/images/lacerda.jpg", alt: "lacerda" },
        { src: "/images/luzcolor.jpg", alt: "luzcolor" },
        { src: "/images/gastro-mansao.jpg", alt: "mansao" },
        { src: "/images/marquinho.jpg", alt: "marquinho oticas" },
        { src: "/images/nossa-otica.jpg", alt: "Fiel-gas" },
        { src: "/images/barra-shop.jpg", alt: "Barra shoes" }
    ]

    const partnerImages2 = [
        { src: "/images/pietro.jpg", alt: "san pietro" },
        { src: "/images/quimio.jpg", alt: "quimio" },
        { src: "/images/silvinho.jpg", alt: "silvinho" },
        { src: "/images/soleneve.jpg", alt: "soleneve" },
        { src: "/images/varanda.jpg", alt: "restaurante varanda" },
        { src: "/images/ylafrut.jpg", alt: "ylafrut" },
        { src: "/images/plastic.jpg", alt: "Marquinhos otica" },
        { src: "/images/emporio.jpg", alt: "emporio" },
        { src: "/images/mfc.jpg", alt: "mfc esportes" },
        { src: "/images/antunes.png", alt: "antunes" },
        { src: "/images/arrastao.png", alt: "arrastao" },
        { src: "/images/pp.png", alt: "pp" },
        { src: "/images/cllin.png", alt: "clin" },
        { src: "/images/gran.png", alt: "gran" },
        { src: "/images/bendito.png", alt: "bendito" },
        { src: "/images/gilson.png", alt: "mfc esportes" },
        { src: "/images/kaka.png", alt: "kaka" },
        { src: "/images/luzz.png", alt: "luz" },
        { src: "/images/martins.png", alt: "martins" },
        { src: "/images/mw.png", alt: "mw" }
    ]

    return (
        <section id="parceiros">
            <div id="features" className="">
                <div className="mx-auto flex w-full flex-wrap items-center">
                    <div className="flex w-full flex-col text-center">
                        <div className="p-10">
                            <h1 className={`${rubik.className} text-bold text-2xl text-[#1a0f31] md:text-4xl`}>
                                Alguns de nossos parceiros
                            </h1>
                        </div>

                        <div className="mb-8 ">
                            <Slider {...settings}>
                                {partnerImages1.map((image, index) => (
                                    <div key={index}>
                                        <Image
                                            src={image.src}
                                            quality={100}
                                            priority={true}
                                            width={200}
                                            height={200}
                                            alt={image.alt}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        <div className="">
                            <Slider {...settings}>
                                {partnerImages2.map((image, index) => (
                                    <div key={index}>
                                        <Image
                                            src={image.src}
                                            className="border"
                                            quality={100}
                                            priority={true}
                                            width={200}
                                            height={200}
                                            alt={image.alt}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}