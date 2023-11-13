"use client"
import React, { useRef, useState } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { rubik } from "../app/layout"

import Link from "next/link"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"

export default function Carousel() {
    const sliderRef = useRef(null)

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{
                    ...style,
                    color: "red",
                    display: "flex",
                    position: "absolute",
                    right: 20, // Ajuste a posição da seta direita
                    top: "50%", // Ajuste a posição vertical da seta
                    transform: "translateY(-50%)" // Centraliza verticalmente
                }}
                onClick={onClick}></div>
        )
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props
        return (
            <div
                className={className}
                style={{
                    display: "flex",
                    position: "absolute",
                    margin: "0",
                    left: 20,
                    zIndex: 1
                }}
                onClick={onClick}
            />
        )
    }

    const settings = {
        dots: true,
        infinite: true,
        // fade: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Ativar o autoplay
        autoplaySpeed: 50000000,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
    }

    return (
        <div className=" relative h-screen ">
            <Slider {...settings} className="h-1/2 w-full bg-gray-400 md:h-3/4">
                <div className=" h-screen ">
                    <div
                        className="flex h-1/2 flex-col justify-center bg-cover bg-no-repeat  p-5 md:h-3/4"
                        style={{
                            backgroundImage:
                                ' linear-gradient(265deg, rgba(57,26,125,0.9)40%, transparent 90%), url("/images/pc.jpg") '
                        }}>
                        <div className="relative grid grid-cols-2">
                            <div className="relative col-span-1">{/* Conteúdo da primeira coluna */}</div>
                            <div className="col-span-2 md:col-span-1">
                                <h2
                                    className={`${rubik.className} text-extrabold  text-center text-3xl text-white md:text-start   md:text-6xl`}>
                                    Sistema completo e fácil de usar.
                                </h2>
                                <h3
                                    className={`${rubik.className} text-extrabold hidden  pt-10 text-xl text-white md:block`}>
                                    Nosso sistema oferece uma solução completa e abrangente. Com todas as ferramentas
                                    necessárias para a gestão de notas fiscais, controle de vendas e muito mais.
                                </h3>
                                <div className="flex justify-center pt-5">
                                    <Link
                                        href="https://api.whatsapp.com/send?phone=32999245031&text=Olá, gostaria de saber mais sobre a Go Up!"
                                        target="blank">
                                        <Button
                                            variant="outlined"
                                            className={` ${rubik.className} items-center rounded-2xl border-none bg-[#950B9A] px-20 font-bold
                                            text-white hover:border-none hover:bg-white hover:text-[#391a7d]`}>
                                            Fale com a Go Up!
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  h-screen ">
                    <div
                        className="flex h-1/2 flex-col justify-center bg-cover bg-center bg-no-repeat p-5 md:h-3/4 "
                        style={{
                            backgroundImage:
                                ' linear-gradient(130deg, rgba(57,26,125,0.9) 40%, transparent 90%), url("/images/student.jpg") '
                        }}>
                        <div className=" flex flex-col items-center justify-center  md:w-1/2  ">
                            <h2
                                className={`${rubik.className} text-extrabold  text-center text-3xl text-white md:text-start   md:text-6xl`}>
                                Nossa equipe está pronta para você
                            </h2>
                            <h2
                                className={`${rubik.className} text-extrabold hidden  pt-10 text-xl text-white md:block`}>
                                Seja qual for a sua necessidade, estamos prontos para superar as expectativas e garantir
                                que você tenha a melhor experiência possível. Seu sucesso é o nosso compromisso.
                            </h2>
                            <div className="flex justify-center pt-5">
                                <Link
                                    href="https://api.whatsapp.com/send?phone=32999245031&text=Olá, gostaria de saber mais sobre a Go Up!"
                                    target="blank">
                                    <Button
                                        variant="outlined"
                                        className={` ${rubik.className} items-center rounded-2xl border-none bg-[#950B9A] px-20  font-bold
                                    text-white hover:border-none hover:bg-white hover:text-[#391a7d]`}>
                                        Fale com a Go Up
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  h-screen ">
                    <div
                        className="flex h-1/2 flex-col justify-center bg-cover bg-center bg-no-repeat p-5 md:h-3/4"
                        style={{
                            backgroundImage:
                                ' linear-gradient(265deg ,  rgba(57,26,125,0.9) 40%, transparent 90%), url("/images/aperto.jpg") '
                        }}>
                        <div className="grid grid-cols-2">
                            <div className="col-span-1">{/* Conteúdo da primeira coluna */}</div>
                            <div className="col-span-2 md:col-span-1">
                                <h2
                                    className={`${rubik.className} text-extrabold text-center text-3xl text-white md:text-start  md:text-6xl`}>
                                    Compromisso inabalável com nossos clientes
                                </h2>
                                <h3
                                    className={`${rubik.className} text-extrabold hidden pt-10  text-xl text-white md:block`}>
                                    Estamos dedicados a superar as expectativas, ouvir atentamente suas necessidades e
                                    trabalhar incansavelmente para garantir o seu sucesso.
                                </h3>
                                <div className="flex justify-center pt-5">
                                    <Link
                                        href="https://api.whatsapp.com/send?phone=32999245031&text=Olá, gostaria de saber mais sobre a GoUp!"
                                        target="blank">
                                        <Button
                                            variant="outlined"
                                            className={` ${rubik.className} items-center rounded-2xl border-none bg-[#950B9A] px-20  font-bold
                                    text-white hover:border-none hover:bg-white hover:text-[#391a7d]`}>
                                            Fale com a Go Up
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" h-screen">
                    <div
                        className="flex h-1/2 flex-col justify-center bg-cover bg-center bg-no-repeat p-5 md:h-3/4 "
                        style={{
                            backgroundImage:
                                ' linear-gradient(65deg ,  rgba(57,26,125,0.9) 40%, transparent 90%), url("/images/digital.jpg") '
                        }}>
                        <div className=" flex flex-col md:w-1/2 ">
                            <h2
                                className={`${rubik.className} text-extrabold  text-center text-3xl text-white md:text-start md:text-6xl`}>
                                Gestão de notas fiscais simplificada
                            </h2>
                        </div>
                        <div className="  flex flex-col md:w-1/2 ">
                            <p
                                className={`${rubik.className} text-extrabold hidden pt-10  text-xl text-white md:block`}>
                                Simplificamos o controle de notas fiscais e vendas.
                            </p>
                            <div className="flex justify-center pt-5">
                                <Link
                                    href="https://api.whatsapp.com/send?phone=32999245031&text=Olá, gostaria de saber mais sobre a Go Up!"
                                    target="blank">
                                    <Button
                                        variant="outlined"
                                        className={` ${rubik.className} items-center rounded-2xl border-none bg-[#950B9A] px-20  font-bold
                                    text-white hover:border-none hover:bg-white hover:text-[#391a7d]`}>
                                        Fale com a Go Up
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
